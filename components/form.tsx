import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Input,
  Snackbar,
  Paper,
  Typography,
  Grid,
  FormControlLabel,
  FormGroup,
  Switch,
  InputAdornment
} from '@mui/material';

interface Customer {
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
}

interface UserData {
  address: string;
  arrivedAt: string;
  customer: Customer;
  services: string[];
  timeLimit: string;
}

const REQUEST_URL = 'https://staging-api.daykarkal.com/appointments';
const DATA_API_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUwNmQ5NzczLTY4NGYtNDFjMi05ZTAzLWFiMDhmMTFiOGYwMyIsImlhdCI6MTcwNzM2Mzc0M30.rtJmeYHtUz_bFEnqrnh6hVKxafG0Yjim-myZ71pdM60'
const MyForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    address: '',
    arrivedAt: '',
    timeLimit: '',
    customer: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
    services: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  const submitForm = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(REQUEST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': DATA_API_KEY,
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Server Response:', responseData);
      } else {
        const responseData = await response.json();
        console.error('Server responded with an error:', response.status);
        setError(responseData.message || 'An error occurred');
      }
    } catch (error) {
      setError('Failed to fetch. Please check your internet connection or try again later.');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevValues) => ({
      ...prevValues,
      customer: {
        ...prevValues.customer,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitForm();
  };
  const handleServiceChange = (index: number, value: string) => {
    const updatedServices = [...userData.services];
    updatedServices[index] = value || altText[0]; 
    setUserData({ ...userData, services: updatedServices });
  };
  const altText = "Service";
  const toggleReadOnly = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReadOnly(event.target.checked);
  };
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Appointment
      </Typography>
      <FormGroup>
        <FormControlLabel
          label="View Only?"
          control={<Switch checked={readOnly} onChange={toggleReadOnly} />}
        />
      </FormGroup>
  </Box>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Paper elevation={9} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Appointment Detail
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal" required variant="standard">
              <InputLabel htmlFor="arrivedAt">Arrived At</InputLabel>
              <Input
                id="arrivedAt"
                name="arrivedAt"
                type="date"
                value={userData.arrivedAt}
                readOnly={readOnly}
                onChange={(e) => setUserData({ ...userData, arrivedAt: e.target.value })}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal" required variant="standard">
              <InputLabel htmlFor="address">Address</InputLabel>
              <Input
                id="address"
                name="address"
                value={userData.address}
                readOnly={readOnly}
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal" required variant="standard">
              <InputLabel htmlFor="service">Service</InputLabel>
              <Input
                id="service"
                name="service"
                value={userData.services[0]}
                readOnly={readOnly}
                onChange={(e) => handleServiceChange(0, e.target.value)}
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal" required variant="standard">
              <InputLabel htmlFor="timeLimit">Time Limit</InputLabel>
              <Input
                id="timeLimit"
                name="timeLimit"
                value={userData.timeLimit}
                readOnly={readOnly}
                onChange={(e) => setUserData({ ...userData, timeLimit: e.target.value })}
                endAdornment={<InputAdornment position="end">/min</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
          <Typography variant="h6" gutterBottom>
            Customer Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal" required variant="standard">
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={userData.customer.firstName}
                  readOnly={readOnly}
                  onChange={handleCustomerChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth margin="normal" required variant="standard">
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  value={userData.customer.lastName}
                  readOnly={readOnly}
                  onChange={handleCustomerChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth margin="normal" required variant="standard">
                <InputLabel htmlFor="tel">Telephone</InputLabel>
                <Input
                  id="tel"
                  name="tel"
                  type="number"
                  value={userData.customer.tel}
                  readOnly={readOnly}
                  onChange={handleCustomerChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth margin="normal" required variant="standard">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userData.customer.email}
                  readOnly={readOnly}
                  onChange={handleCustomerChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        <Button type="submit" variant="contained" color="primary" disabled={loading} fullWidth sx={{ marginTop: 2 }}>
          {loading ? <CircularProgress size={24} aria-label="Loading" /> : 'Submit'}
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={error ? error : 'Form submitted successfully'}
      />
    </>
  );
};

export default MyForm;                       