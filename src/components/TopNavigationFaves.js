import React, { Fragment } from 'react';
import {Checkbox, IconButton, SvgIcon, Modal, Backdrop, Fade, makeStyles, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

// Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(0.5),
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: 500
  },
}));


const TopNavigationFaves = ({handleCheckChildElement, favoriteItems, removeFaveFromList, addFaveToList, }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };  

  const handleClose = (event, reason) => {
    if(reason === "backdropClick") {
      return setOpen(false)
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(true)
  }

  const listFavoriteItems  = favoriteItems.map((item, index) => {
    return (
      <List>
        <ListItem divider key={index}>
        <ListItemText primary= {item.value}  />
        <ListItemIcon onClick={handleToggle}>
        <Checkbox 
          checked = {item.isChecked}
          key = {item.id}
          value = {item.value}
          onClick={handleCheckChildElement}
          inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
        />
        </ListItemIcon>
        </ListItem>
      </List>
  )})

  return (
    <Fragment>
      <Fragment>
        <IconButton 
            disableFocusRipple
            size='medium'
            color='primary'
            aria-haspopup="true"
            aria-controls="modal-menu"
            onClick={handleOpen}
          >
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </SvgIcon>
        </IconButton>
      </Fragment>
      <Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Favorite Items</h2>
                {listFavoriteItems}
            </div>
          </Fade>
        </Modal>
      </Fragment>
    </Fragment>
  );
}


export default TopNavigationFaves;