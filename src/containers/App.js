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
import {  Box } from '@material-ui/core';
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
          <Box pt={11} maxWidth={600} mx={'auto'}>
            <Box mr={2} ml={2} pt={1.5} className={'White-container'}>
              <SearchArea
                formChange = {this.onFormChange}
                formSubmit = {this.onFormSubmit}
                formfield = {formfield}
              />
              <GroceryList 
                groceryitems = { items } 
                deleteItem = {this.onDeleteItem}
              />
            </Box>
            <Box mr={2} ml={2}>
              { items.length === 0 && deleteditems.length === 0 && <EmptyList /> }
              <CompletedList 
                deleteditems = { deleteditems }
              />
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
