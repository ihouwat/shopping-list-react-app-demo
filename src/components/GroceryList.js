import React from 'react';
import {categoryStore} from '../groceryStores';
// Import Material Design UI Components
import { TextField, Typography, Modal, Backdrop, Fade, 
        makeStyles, List, ListItem, ListItemText, ListItemIcon, 
        IconButton, SvgIcon } from '@material-ui/core';

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
    color: theme.palette.text.primary,
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


const GroceryList = ({ category, modalItemName, itemNotes, groceryItems, completeItem, deleteItem, onAddNote, modalClose, modalOpen, modalIsOpen }) => {
  // Use styles from this file
  const classes = useStyles();

  // Helper function to sort groceries alphabetically
  const sortGroceriesAlphabetically = (a, b) => {
    const itemA = a.name.toUpperCase();
    const itemB = b.name.toUpperCase();
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison
  }


  let categorizedList = [];
  const flattenList = () => {
      for (const i in categorizedList) {
        if (categorizedList[i][1] in categorizedList) {
          console.log('its in there')
        }
        console.log(categorizedList, 'entire')
      }
    }
    
  const searchStore = (store, grocery) => {
    for (const storeCategory of store) {
      if (storeCategory.items.includes(grocery.name)) {
        let matchedItem = Object.assign({}, [storeCategory.id, storeCategory.category, grocery.name])
        categorizedList.push(matchedItem)
        flattenList()
      }
    }
  }


  // Main function that creates a temporary list based on this.state.items
  const sortGroceries = () => {
    let tempList = groceryItems.map(el=>el)
    if (category === "Order Entered") {
      return tempList
    }
    else if  (category === "Alphabetical") {
      let sortedList = tempList.sort(sortGroceriesAlphabetically)
      return sortedList
    }
    else if  (category === "Categories") {
      for (const item in tempList) {
        searchStore(categoryStore, tempList[item])
      }      
      return tempList
    }
  }

  // Create a sorted list which will be passed to the mapping array below
  const listToMap = sortGroceries();
  // Map out list items
  const listItems = listToMap.map((item, index) => {
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