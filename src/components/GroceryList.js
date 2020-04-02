import React from 'react';
// Import Material Design UI Components
import { makeStyles, List, ListItem, ListItemText, ListItemIcon, IconButton, SvgIcon } from '@material-ui/core';

// Material-UI styles
const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: '0',
    paddingBottom: '0',
  },
}));

const GroceryList = ({ groceryItems, completeItem, deleteItem }) => {
  const classes = useStyles();
  const listItems = groceryItems.map((item, index) => {
    return (
      <ListItem button key={index}>
        <ListItemText primary= {item}  />
        <ListItemIcon>
          <IconButton inputProps={{ 'aria-labelledby': 'trash' }}>
            <SvgIcon onClick={deleteItem.bind(this, `${item}`, 'items')}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </SvgIcon>
          </IconButton>
        </ListItemIcon>
        <ListItemIcon >
          <IconButton
            inputProps={{ 'aria-labelledby': 'done' }}
          >
            <SvgIcon onClick={completeItem.bind(this, `${item}`)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            </SvgIcon>
          </IconButton>
        </ListItemIcon>
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