import React, { Component } from 'react';
import './App.css';
// Import Components
import SearchArea from '../components/SearchArea';
import GroceryList from '../components/GroceryList';
import CompletedList from '../components/CompletedList';
import EmptyList from '../components/EmptyList';
import TopNavigation from '../components/TopNavigation';
import TopNavigationTitle from '../components/TopNavigationTitle';
import TopNavigationCategories from '../components/TopNavigationCategories';
import TopNavigationFaves from '../components/TopNavigationFaves';
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
      itemnotes: '',
      items: [],
      completeditems: [],
      snackbarIsOpen: false, 
      modalIsOpen: false,
    }
    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onRecoverItem = this.onRecoverItem.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  // Methods

  // Generic add grocery method
  addToList = (item) => {
    this.setState({items: this.state.items.concat(item)})
    this.toggleSnackbar(item)
  }

  // Generic search list method
 searchItemList = (item, list) => {
    if(list === 'items') {
      var searchList = this.state.items;
    } else {
      searchList = this.state.completeditems;
    }
    for(var i=0; i < searchList.length; i++){
      if (searchList[i].name === item.name){
        return searchList[i]
      }
    } 
  }

  // Generic remove from list method
  removeFromList = (list, i) => {
    if(list === "items") {
      this.state.items.splice( i, 1 );
      this.setState({items: this.state.items});
    } else {
      this.state.completeditems.splice( i, 1 );
      this.setState({completeditems: this.state.completeditems});
    }
  }
  // Check for uncategorized items to toggle snackbar warning
  toggleSnackbar = (item) => {
    if(item.name === "AA" || item.name === "Apples") {
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

  onAddNote = (event) => {
    this.setState({itemnotes: event.target.value})
  }

  // On 'enter' add grocery item
  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.formfield === '') {
      return;
    }
    const newItem = {
      'name': this.state.formfield.charAt(0).toUpperCase(0) + this.state.formfield.slice(1),
      'note': '',
    } 
    this.addToList(newItem)
    this.setState({formfield: ''})
  }

  // Acquire grocery item, move item from active to completed list
  onCompleteItem = (completedItem, groceryList) => {
    this.removeFromList(groceryList, this.searchItemList(completedItem, groceryList))
    this.setState({completeditems: this.state.completeditems.concat(completedItem)}); 
  }

  // Fully delete item from whichever list it is in 
  onDeleteItem = (deletedItem, list) => {
    this.removeFromList(list, this.searchItemList(deletedItem, list) )
  }

  // Readd item from completed list to grocery list
  onRecoverItem = (item, list) => {
    this.addToList(item)
    this.removeFromList(list, this.searchItemList(item, list))
  }

   // Modal functions
   modalOpen = () => {
     this.setState({modalIsOpen: true});
   };
 
   modalClose = (item, list) => {
    this.setState({modalIsOpen: false});
    var matchItem = this.searchItemList(item, list)
    matchItem['note'] = this.state.itemnotes
    this.setState({formfield: ''})
  };
  
  // Render
  render () {
    const { formfield, items, completeditems, snackbarIsOpen, itemnotes, modalIsOpen } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <FixedScroll>
            <TopNavigation>
              <TopNavigationTitle/>
              <TopNavigationCategories/>
              <TopNavigationFaves addToList={this.addToList} removeFromList={this.removeFromList}/>
            </TopNavigation>
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
                itemnotes = { itemnotes }
                modalIsOpen = { modalIsOpen }
                modalClose = { this.modalClose }
                modalOpen = { this.modalOpen }
                onAddNote = { this.onAddNote }
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
