// react
import React, {useEffect} from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

// components for handling public/private routes
import PublicRoute from './components/auth/PublicRoute';
import PrivateRoute from './components/auth/PrivateRoute';

// components of the app
import Login from './components/Pages/SignIn/SignIn';
import Contacts from './components/Pages/Contacts/Contacts';

// styles from material ui
import { Box, CircularProgress, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { RootState } from './store';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setLoading } from './store/actions/authActions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if(user) {
        dispatch(setLoading(true));
      }

    dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return (
      <CircularProgress color="secondary" />
    )
  }

  return (
    <>
      <Router>
        <CssBaseline />

        <Switch>
          <React.Fragment>
            <Container>
              <Box
                  sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',}}>
                  <PublicRoute component={Login} exact path="/login"/>

                  <PrivateRoute component={Contacts} exact path="/"/>
                  <PrivateRoute component={Contacts} exact path="/contacts"/>
              </Box>
            </Container>
          </React.Fragment>
        </Switch>
      </Router>
    </>
  );
}

export default App;