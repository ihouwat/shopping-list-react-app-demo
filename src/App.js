import React from 'react';
import './App.css';

// Material Design UI Components
import { TextField, Button, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/';
// Material Design Theme
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Material Design UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Shopping List</h1>
      </header>
      <ThemeProvider theme={theme}>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Type in item" />
      </form>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <List component="nav" aria-label="contacts">
          <ListItem button>
            <ListItemIcon>
              x
            </ListItemIcon>
            <ListItemText primary="Chelsea Otakan" />
          </ListItem>
          <ListItem button>
            <ListItemText inset primary="Eric Hoffman" />
          </ListItem>
        </List>
      </ThemeProvider>
    </div>
  );
}

export default App;
