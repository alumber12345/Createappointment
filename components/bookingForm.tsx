import React from 'react';
import { Grid, TextField, Button, Typography, Container } from '@mui/material';

const BookingForm: React.FC = () => {
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Book Your Trip
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField fullWidth label="Destination" variant="outlined" required />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Check-in Date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Check-out Date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Number of Guests"
            variant="outlined"
            type="number"
            required
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Book Now
      </Button>
    </Container>
  );
};

export default BookingForm;