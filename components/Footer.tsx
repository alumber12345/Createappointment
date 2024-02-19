import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'darkblue', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="left" color="text.secondary">
          
        </Typography>

        <Divider></Divider>
        <Typography variant="body1" align="center" color="text.secondary">
          © CopyRight {new Date().getFullYear()} TravelSite
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;