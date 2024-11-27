import { Menu, MenuItem, Typography } from '@mui/material';
import { Page } from "../../../types/pageType";
import { Link } from 'react-router-dom';

interface DropdownMenuProps extends Partial<Page>{
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;  
}

function DropdownMenu({ anchorEl, open, onClose, children}: DropdownMenuProps) {
  return (
    <Menu
      elevation={8}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children?.map((child, index) => {
        const IconComponent = child.startIcon;
        return(
          <MenuItem 
            key={index} 
            onClick={onClose}
            component={Link} to={child.link ?? "#"}
            sx={(theme) => ({                                    
              '&:hover': {              
                backgroundColor: theme.palette.primary.main
              },
              '&:hover > p': {
                transform: 'translateX(8px)'
              },
              '&:hover > *': {
                color: theme.palette.primary.contrastText
              },
              transition: theme.transitions.create(['background-color', 'transform'], {
                duration: theme.transitions.duration.short, 
              }),
            })}
          >
            {IconComponent && <IconComponent sx={{marginRight:"0.5rem"}}/>}
            <Typography 
              sx={(theme) => ({
                textAlign: 'center',
                transition: theme.transitions.create(['background-color', 'transform'], {
                  duration: theme.transitions.duration.short, 
                })
              })}
            >
              {child.caption}
            </Typography>
          </MenuItem>
        )
      })}
    </Menu>
  );
}

export default DropdownMenu;