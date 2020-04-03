import React, { Fragment } from 'react';
import {IconButton, SvgIcon, Modal, Backdrop, Fade, makeStyles, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';

// Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '100%',
    maxWidth: 500
  },
}));


const TopNavigationFaves = ({addNewToGroceries}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
            <List>
              <ListItem divider key={'1'}>
              <ListItemText primary= 'favorite item'  />
              <ListItemIcon>
                <IconButton 
                  disableFocusRipple
                  size='medium'
                  color='primary'
                  aria-haspopup="true"
                  aria-controls="modal-menu"
                  onClick={handleOpen}
                >
                  <SvgIcon onClick={addNewToGroceries.bind(this, 'favorite item')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  </SvgIcon>
                </IconButton>
              </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}


export default TopNavigationFaves;