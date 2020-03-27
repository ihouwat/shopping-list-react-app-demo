import React from 'react';

// Import Material Design UI Components
import { List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';


const GroceryList = ({ groceryitem }) => {
  const listItems = groceryitem.map((item) =>
    <ListItem button>
      <ListItemText inset primary= {item}  />
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': 'item' }}
        />
      </ListItemIcon>
    </ListItem>
  )
  return (
    <List component="nav" aria-label="contacts">
      {listItems}
    </List>
  )
}

export default GroceryList;