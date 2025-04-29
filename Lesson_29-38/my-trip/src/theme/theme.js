import { createTheme } from '@mui/material';

const baseTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      secondary: '#cdd1ff',
      blue: '#369ce4',
    },
    text: {
      main: '#111111',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    body1: {
      fontSize: '15px',
      color: baseTheme.palette.text.main,
      fontFamily: 'Roboto',
      fontWeight: 400,
      [baseTheme.breakpoints.down('xs')]: {
        fontSize: '14px',
      },
    },
    body2: {
      fontSize: '18px',
      color: baseTheme.palette.text.main,
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '300px',
          height: '45px',
          fontSize: '18px',
          padding: 0,
        },
        containedPrimary: {
          backgroundColor: baseTheme.palette.primary.blue,
          color: baseTheme.palette.text.secondary,
          '&:hover': {
            backgroundColor: '#369cd0',
          },
        },
        outlinedPrimary: {
          backgroundColor: 'transparent',
          color: '#369ce4',
          border: '1px solid #369ce4',
          '&:hover': {
            border: '1px solid #369cd0',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc',
            },
            '&:hover fieldset': {
              borderColor: '#999',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1976d2',
              borderWidth: '2px',
            },
          },
          '& label.Mui-focused': {
            color: '#1976d2',
          },
        },
      },
    },
  },
});

export default theme;
