import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#0000',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#0D1012', 
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  components: {

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1F24', 
          color: '#ffffff', 
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
        underline: {
          '&:before': {
            borderBottom: '1px solid #ffffff', 
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #ffffff', 
          },
        },
      },
    },
  },
});

export default theme;