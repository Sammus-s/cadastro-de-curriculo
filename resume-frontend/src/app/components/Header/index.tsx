import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HeaderButton from './HeaderButton';
import { pages } from '../../../constants/headerMenuConstant';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

function Header() {  
  return (
    <AppBar position="static" 
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      })}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"}>            
            <Box
              component="img"
              sx={{
                maxHeight: "4rem",
                mx: "2rem",
                my: "0.5rem"
              }}
              alt="Logo Empresa"
              src="assets/Logo.png"
            />
          </Link>  
          
          <Box gap={2} sx={{ flexGrow: 1, display: 'flex'}}>
            {pages.map((page, index) => (
              <HeaderButton caption={page.caption} children={page.children} link={page.link} startIcon={page.startIcon} key={index}/>                
            ))}
          </Box>

          <Box
            gap={1} 
            sx={(theme) => ({ 
              display: 'flex',
              flexGrow: 0,
              color: theme.palette.primary.main,
              '& > *': {
                '&:hover': {
                  color: theme.palette.secondary.main
                },
                transition: theme.transitions.create('color', 
                  {duration: theme.transitions.duration.short}
                )
              }
            })}
          >
            <IconButton  href={"https://www.facebook.com/"} target="_blank" rel="noopener noreferrer"> 
              <FacebookIcon /> 
            </IconButton>

            <IconButton  href={"https://www.instagram.com/"} target="_blank" rel="noopener noreferrer"> 
              <InstagramIcon /> 
            </IconButton>

            <IconButton  href={"https://api.whatsapp.com/send?phone=551199999999"} target="_blank" rel="noopener noreferrer"> 
              <WhatsAppIcon /> 
            </IconButton>

            <IconButton  href={"https://www.linkedin.com/"} target="_blank" rel="noopener noreferrer"> 
              <LinkedInIcon /> 
            </IconButton>            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
