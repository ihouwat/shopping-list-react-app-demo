import React from 'react';
// Import Material Design UI Components
import { List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';

const GroceryList = ({ groceryitems, deleteItem }) => {
  const listItems = groceryitems.map((item, index) => {
    return (
    <ListItem button key={index}>
      <ListItemText primary= {item}  />
      <ListItemIcon >
        <Checkbox
          edge="end"
          tabIndex={-1}
          disableRipple
          checked = {false}
          inputProps={{ 'aria-labelledby': 'checkbox' }}
          onClick={deleteItem.bind(this, `${item}`)}
        />
      </ListItemIcon>
    </ListItem>
    )
  })
  return (
    <List component="li" aria-label="grocery list">
      {listItems}
    </List>
  )
}

export default GroceryList;