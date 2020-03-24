import React, { Component } from 'react';

// Import Material Design UI Components
import { List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';

class GroceryList extends Component {
  render() {
    return (
      <div>
       <List component="nav" aria-label="contacts">
            <ListItem button divider>
              <ListItemIcon>
                x
              </ListItemIcon>
              <ListItemText primary="Chelsea Otakan" />
            </ListItem>
            <ListItem button divider>
              <ListItemText inset primary="Eric Hoffman" />
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': 'item' }}
                />
              </ListItemIcon>
            </ListItem>
          </List>
      </div>
    )
  }
}

export default GroceryList;