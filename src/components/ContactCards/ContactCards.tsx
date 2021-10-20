import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcontacts } from '../../store/actions/contactsActions';
import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ContactCards = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state: RootState) => state.contacts) 

    useEffect(() => {
        dispatch(getcontacts())
    }, [dispatch])

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid>
                <Typography>
                    Контактов найдено: {data?.length}
                </Typography>
                <Grid container spacing={2}>
                    {data?.map((contact) => {
                        return (
                            <ContactCard contact={contact}/>
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactCards;