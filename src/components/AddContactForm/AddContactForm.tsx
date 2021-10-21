import { Box, Grid, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addcontact } from '../../store/actions/contactsActions';

const AddContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uuid = '';
        const img = '';
        dispatch(addcontact({uuid, name, email, phone, img}));
        e.currentTarget.reset();
    }

    return (
            <Box component="form" 
            onSubmit={handleSubmit} 
            noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                    name="name"
                    required
                    fullWidth
                    id="fname"
                    label="Введите имя"
                    autoFocus
                    onChange={(e) => setName(e.currentTarget.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Введите e-mail"
                    name="email"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Введите номер телефона"
                    name="phone"
                    onChange={(e) => setPhone(e.currentTarget.value)}
                    />
                </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }
                    }
                >
                    Добавить
                </Button>
            </Box>
    );
};

export default AddContactForm;
