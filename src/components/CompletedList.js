import React, { Fragment } from 'react';

// Import Material Design UI Components
import { List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';


const CompletedList = ({ deleteditems }) => {
  const listItems = deleteditems.map((item, index) => {
    return (
    <ListItem button key={index}>
      <ListItemText secondary = {item}  />
      <ListItemIcon >
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': 'checkbox' }}
        />
      </ListItemIcon>
    </ListItem>
    )
  })

    if(deleteditems.length === 0) {
      return null;
    }
    return (
    <Fragment>
      <h2>Completed Items</h2>
      <List component="li" aria-label="deleted items">
        {listItems}
      </List>
    </Fragment>
  )
}

export default CompletedList;