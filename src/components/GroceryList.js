import React from 'react';
// Import Material Design UI Components
import { TextField, Typography, Modal, Backdrop, Fade, makeStyles, List, ListItem, ListItemText, ListItemIcon, IconButton, SvgIcon } from '@material-ui/core';

// Material-UI styles
const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    padding: 0,
  },
  listItemText: {
    marginTop: 0,
    marginBottom: 0,
    height: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  // Modal styles
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

const GroceryList = ({ modalItemName, itemNotes, groceryItems, completeItem, deleteItem, onAddNote, modalClose, modalOpen, modalIsOpen }) => {
  // Use styles from this file
  const classes = useStyles();

  // Map out list items
  const listItems = groceryItems.map((item, index) => {
    return (
      <ListItem className={classes.listItem} button key={index}>
        <ListItemText 
          multiline
          onClick={modalOpen.bind(this, item)}
          className={classes.listItemText} 
          primary= {item.name}
          secondary = {item.note}
        /> 
        <ListItemIcon onClick={deleteItem.bind(this, item, 'items')}>
          <IconButton aria-label = 'trash' >
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </SvgIcon>
          </IconButton>
        </ListItemIcon>
        <ListItemIcon onClick={completeItem.bind(this, item, 'items')}>
          <IconButton aria-label = 'done'>
            <SvgIcon >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            </SvgIcon>
          </IconButton>
        </ListItemIcon>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalIsOpen}
        onClose={modalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalIsOpen}>
          <div className={classes.paper}>
            <Typography variant='h5' paragraph={true} color="textPrimary">
              {modalItemName}
            </Typography>
            <form>
              <TextField
                id="standard-adornment-weight"
                multiline
                type='text'
                variant = "filled"
                rows="2"
                fullWidth
                value={itemNotes}
                placeholder="Enter note"
                onChange={ onAddNote }
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'add note',
                }}
              />
            </form>
          </div>
          </Fade>
        </Modal>
      </ListItem>
    )
  })
  return (
    <List component="li" aria-label="grocery list" className={classes.list}>
      {listItems}
    </List>
  )
}

export default GroceryList;