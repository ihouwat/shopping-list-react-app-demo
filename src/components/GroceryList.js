import React from 'react';
import {freshThymeStore} from '../groceryStores';
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

  // Helper method to sort groceries alphabetically
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

  // Helper method to create a temp copy of the grocery store array, with an empty items array
  const storeDeepCopyfunction = (inArray) => {
    let outArray, value, key

      if(typeof inArray !== "object" || inArray === null) {
        return inArray // Return the value if inArray is not an object
      }

      // Create an array or object to hold the values
      outArray = Array.isArray(inArray) ? [] : {}

      for (key in inArray) {
        value = inArray[key]
        // Recursively (deep) copy for nested objects, including arrays
        outArray[key] = (key === 'items') ?  outArray[key] = []
        : (typeof value === "object" && value !== null && key !== 'items') ? storeDeepCopyfunction(value)
        : value
      }
    return outArray
  }

  // Helper method to search Grocery Store template array for item
  const searchGroceryStoreTemplate = (store, grocery) => {
    for (const storeCategory of store) {
      if (storeCategory.items.includes(grocery.name)) {
        // If an item matches one found in the template store, create new array
        let matchedItem = [];
        // Matched item array includes an object with store-specific id, category, name 
        matchedItem.push({
            id: storeCategory.id,
            category: storeCategory.category,
            name: grocery.name
          });
      return matchedItem
      }
    }
  }


  // Helper method to match item with its relevant store category
  const identifyCategoryInStoreTemplate = (searchedItem, storeTemplate) => {
    // Variable to isolate the item category
    let matchedItemCategory = searchedItem[0].id
    for (let i = 0; i < storeTemplate.categories.length; i++ ) {
      if(storeTemplate.categories[i].id === matchedItemCategory){
        let value = storeTemplate.categories[i].id
        return value
      }
    }
  }

  // Main method that creates a temporary list based on this.state.items
  const unsortedGroceries = () => {
    let tempList = groceryItems.map(el=>el)
    if (category === "Order Entered") {
      return tempList
    }
    else if(category === "Alphabetical") {
      let sortedList = tempList.sort(sortGroceriesAlphabetically)
      return sortedList
    }
  }
  const sortedGroceries = () => {
    let tempList = groceryItems.map(el=>el)
    // Create a copy of the store template
    const copiedStore = storeDeepCopyfunction(freshThymeStore)
    for (const item in tempList) {
      // Find if item from template list in store template
      let searchedItem = searchGroceryStoreTemplate(freshThymeStore.categories, tempList[item])
      if (searchedItem !== undefined){
        // Match the item with its category ID in store template
        const matchId = identifyCategoryInStoreTemplate(searchedItem, freshThymeStore)
        for (let i in copiedStore.categories){
          // If match, add the item in the appropriate array index of copiedStore
          if (copiedStore.categories[i].id === matchId) {
            copiedStore.categories[i].items.push(tempList[item])
          }
        }
      }
    }    
     return copiedStore
    }

  // Create a sorted list which will be passed to the mapping array below
  const unsortedListToMap = unsortedGroceries();
  const sortedListToMap = sortedGroceries();

  // const listItemsWithCategories = sortedListToMap.map(category => {
  //     return (
  //       <div>
  //       <h1>{category.category}</h1>
  //       {category.items.map(item => <p>{item.name}</p>) }
  //       </div>
  //     ) 
  // })

  // Map out list items
  const listItemsWithoutCategories = unsortedListToMap.map((item, index) => {
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
    category === 'Order Entered' || category === 'Alphabetical' ?
    <List component="li" aria-label="grocery list" className={classes.list}>
      {listItemsWithoutCategories}
    </List>
    : 
    "{listItemsWithCategories}"
  )
}

export default GroceryList;