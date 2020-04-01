
import React, { Fragment } from 'react';
import {IconButton, SvgIcon, Menu, MenuItem} from '@material-ui/core';

const TopNavigationCategories = () => {
  // Functions for categories menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton 
          disableFocusRipple
          size='medium'
          color='primary'
          aria-haspopup="true"
          aria-controls="simple-menu"
          onClick={handleClick}
        >
          <SvgIcon  >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 19 21" width="19px" height="19px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </SvgIcon>
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Alphabetical</MenuItem>
        <MenuItem onClick={handleClose}>Categories</MenuItem>
      </Menu>
    </Fragment>
  );
}

export default TopNavigationCategories;