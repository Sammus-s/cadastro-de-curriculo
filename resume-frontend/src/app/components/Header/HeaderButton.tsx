import React from "react";
import { Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Page } from "../../../types/pageType";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

type HeaderButtonProps = Page;


function HeaderButton({caption, link, children, startIcon: IconComponent } : HeaderButtonProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {      
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {      
      setAnchorEl(null);
      event.stopPropagation();
    };

    return (
      <Link to={link ?? '#'}>
        <Button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleClose}
          startIcon={IconComponent && <IconComponent />}
          endIcon={children && children.length > 0 ? <KeyboardArrowDownIcon /> : null}
          sx={(theme) => ({
            my: 1,
            color: theme.palette.primary.main,
            backgroundColor: "inherit",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            '&:hover': {
              color: theme.palette.secondary.main
            },
            transition: theme.transitions.create(['color'], {
              duration: theme.transitions.duration.shorter, 
            }),
          })}
        >
          
          <Typography variant="button">{caption}</Typography>
              
          {children && children.length > 0 && (
            <DropdownMenu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              children={children}
              startIcon={IconComponent}
            />
          )}
          
        </Button>
      </Link>
    );    
}

export default HeaderButton;