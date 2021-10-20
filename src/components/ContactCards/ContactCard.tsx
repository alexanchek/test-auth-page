import * as React from 'react';
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import { CardActions, Button, TextField } from '@mui/material';
import { Contact } from '../../types/Redux/ContactsTypes';

import UnknownImage from './unknown.jpg';

import { useDispatch } from 'react-redux';
import { deletecontact, updatecontact } from '../../store/actions/contactsActions'

interface ContactCardProps {
    contact: Contact
}

const ContactCard: React.FC<ContactCardProps> = ({contact}) => {
    const [editMode, setEditMode] = useState(false);
    const [changedName, setChangedName] = useState('');
    const [changedEmail, setChangedEmail] = useState('');
    const [changedPhone, setChangedPhone] = useState('');

    const {name, email, phone, img, uuid} = contact;
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deletecontact(uuid));
    }

    const handleEditClick = () => {
        setEditMode(!editMode);
    }

    const handleSaveClick = () => {
        setEditMode(!editMode);
        dispatch(updatecontact(uuid, {changedName, changedEmail, changedPhone}));
        setChangedName('');
        setChangedEmail('');
        setChangedPhone('');
    }

    const BoxForImage = (img: string) => {
        return (
            <Box
            component="img"
            sx={{
                maxHeight: '250px',
                maxWidth: '250px'
            }}
            alt={`${name}`}
            src={img}
          />
        )
    }

  return (
      <Grid item xs={6}>
              <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{}}>
          {img ? BoxForImage(img): BoxForImage(UnknownImage)};
          
          {editMode 
          ? <TextField
            name="name"
            fullWidth
            id="firstName"
            label="Введите имя"
            autoFocus
            variant={"standard"}
            onChange={(e) => setChangedName(e.currentTarget.value)}
            />
        :<Typography gutterBottom variant="h5" component="h2">
        {name}
        </Typography> }
        
        {editMode 
        ? <TextField
        fullWidth
        id="lastName"
        label="Введите e-mail"
        name="surname"
        variant={"standard"}
        onChange={(e) => setChangedEmail(e.currentTarget.value)}
        />
        : 
        <Typography>
            E-Mail: {email}
        </Typography>}


        {editMode
        ? <TextField
        fullWidth
        id="email"
        label="Введите номер"
        name="email"
        variant={"standard"}
        onChange={(e) => setChangedPhone(e.currentTarget.value)}
        />
        : <Typography>
        Phone: {phone}
    </Typography>}
      </CardContent>
      <CardActions>
        {editMode ? <Button size="small" onClick={handleSaveClick}>Save</Button> : <Button size="small" onClick={handleEditClick}>Edit</Button>}
        <Button size="small" onClick={handleDeleteClick}>Delete</Button>
      </CardActions>
    </Card>
      </Grid>
  );
}

export default ContactCard;