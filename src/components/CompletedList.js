import React, { Component } from 'react';

// Import Material Design UI Components
import { List, ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';

class CompletedList extends Component {
  render() {
    return (
      <div>
        <List component="nav" aria-label="contacts">
          <ListItem button>
            <ListItemIcon>
              x
            </ListItemIcon>
            <ListItemText primary="Completed" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Completed 2" />
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

export default CompletedList;