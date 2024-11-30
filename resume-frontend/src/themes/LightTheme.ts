import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  cssVariables: true,  
  palette: {
    primary: { //Blue
      main: '#0A3F97', 
      light: '#00396B',
      dark: '#16297d', 
      contrastText: '#fff' 
    },
    secondary: { //Orange
      main: '#FF7300',
      light: '#FF8800',
      dark: '#c51162',
      contrastText: '#fff'
    },
    common: {
      black: '#1b1b1b', 
      white: '#ffffff'
    },
    text: {
      primary: '#1b1b1b',
      secondary: '#757575'
    },
    background: {
      default: '#f4f6f8', 
      paper: '#fff'
    }
  },
  typography: {
    fontFamily: 'libre-franklin, Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    
  }
});

export default LightTheme;
