import React, { Component } from 'react';
import './App.css';
// Import Components
import SearchArea from '../components/SearchArea';
import GroceryList from '../components/GroceryList';
import CompletedList from '../components/CompletedList';
import EmptyList from '../components/EmptyList';
import TopNavigation from '../components/TopNavigation';
import FixedScroll from '../components/FixedScroll';
import UncategorizedSnackbar from '../components/UncategorizedSnackbar'
// Import Material Design UI Custom Theme API
import {  Box } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Material Design UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(0,0,0,.54)',
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
      completeditems: [],
      snackbarIsOpen: false, 
    }
    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onRecoverItem = this.onRecoverItem.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  // Methods

  // Generic add grocery method
  addToList = (item) => {
    this.setState({items: this.state.items.concat(item)})
    this.toggleSnackbar(item)
  }

  // Generic remove grocery methos
  removeFromList = (item, list) => {
    if(list === 'items') {
      let indexItem = this.state.items.indexOf(item)
      this.state.items.splice( indexItem, 1 )
      this.setState({items: this.state.items})
    } else {
      let indexItem = this.state.completeditems.indexOf(item)
      this.state.completeditems.splice( indexItem, 1 )
      this.setState({completeditems: this.state.completeditems})
    }
  }

  // Check for uncategorized items to toggle snackbar warning
  toggleSnackbar = (item) => {
    if(item === "AA" || item === "Apples") {
      this.setState({snackbarIsOpen: true})
      setTimeout(() => {
        this.setState({snackbarIsOpen: false});
      }, 4500);
    }
    else {
      this.setState({snackbarIsOpen: false});
    }
  }

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
    this.addToList(newItem)
    this.setState({formfield: ''})
  }

  // Acquire grocery item, move item from active to completed list
  onCompleteItem = (completedItem, groceryList) => {
    this.removeFromList(completedItem, groceryList)
    this.setState({completeditems: this.state.completeditems.concat(completedItem)}); 
  }

  // Fully delete item from whichever list it is in 
  onDeleteItem = (deletedItem, list) => {
    this.removeFromList(deletedItem, list)
  }

  // Readd item from completed list to grocery list
  onRecoverItem = (item, list) => {
    this.addToList(item)
    this.removeFromList(item, list)
  }

  // Render
  render () {
    const { formfield, items, completeditems, snackbarIsOpen } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <FixedScroll>
            <TopNavigation
               addToList = {this.addToList}
               removeFromList = {this.removeFromList}
            />
          </FixedScroll>
          <Box pt={11} maxWidth={600} mx={'auto'}>
            <Box mr={2} ml={2} pt={1.5} className={'White-container'}>
              <SearchArea
                formChange = {this.onFormChange}
                formSubmit = {this.onFormSubmit}
                formfield = {formfield}
                toggleSnackbar = {this.toggleSnackbar}
              />
              <GroceryList 
                groceryItems = { items } 
                completeItem = {this.onCompleteItem}
                deleteItem = {this.onDeleteItem}
              />
            </Box>
            <Box mr={2} ml={2}>
              { items.length === 0 && completeditems.length === 0 && <EmptyList /> }
              <CompletedList 
                completedItems = { completeditems }
                deleteItem = {this.onDeleteItem}
                recoverItem = {this.onRecoverItem}
              />
            </Box>
          </Box>
          {
            snackbarIsOpen ? <UncategorizedSnackbar /> 
            : undefined
          }
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
