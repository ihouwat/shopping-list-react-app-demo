import React, { Component } from 'react';
import './App.css';
// Import Components
import SearchArea from '../components/SearchArea';
import GroceryList from '../components/GroceryList';
import CompletedList from '../components/CompletedList';
import EmptyList from '../components/EmptyList';
import Header from '../components/Header';
import FixedScroll from '../components/FixedScroll';
// Import Material Design UI Custom Theme API
import { Container, Box } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Material Design UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
  spacing: 8,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formfield: '',
      items: [],
      deleteditems: [],
    }
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  // Methods

  // Listen to search area input
  onFormChange = (event) => {
    this.setState({formfield: event.target.value})
  }

  // On 'enter' add grocery item
  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.formfield === '') {
      return;
    }
    const newItem = this.state.formfield.charAt(0).toUpperCase(0) + this.state.formfield.slice(1);
    this.setState({items: this.state.items.concat(newItem)})
    this.setState({formfield: ''})
  }

  // Delete grocery item
  onDeleteItem = (deletedItem) => {
    this.setState({deleteditems: this.state.deleteditems.concat(deletedItem)});
    this.setState({items: this.state.items.filter(deleted => deleted !== deletedItem )})
  }

  // Render
  render () {
    const { formfield, items, deleteditems } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <FixedScroll>
            <Header />
          </FixedScroll>
          <Container maxWidth="sm" className="List-area">
            <Box pt={10} >
              <SearchArea 
                formChange = {this.onFormChange}
                formSubmit = {this.onFormSubmit}
                formfield = {formfield}
              />
            </Box>
            {items.length === 0 && 
              <EmptyList />
            }
              <GroceryList 
                groceryitems = { items } 
                deleteItem = {this.onDeleteItem}
              />
              <CompletedList 
                deleteditems = { deleteditems }
              />
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
