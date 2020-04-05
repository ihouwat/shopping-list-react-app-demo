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
import UncategorizedItemSnackbar from '../components/UncategorizedItemSnackbar'
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
      formField: '',
      itemNotes: '',
      items: [],
      completedItems: [],
      favoriteItems: [
        {id: 1, value: 'Hummus', isChecked: false},
        {id: 2, value: 'Chocolate Chips', isChecked:false},
        {id: 3, value: 'Apples', isChecked: false},
      ],
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
    // Add item to list
    this.setState({items: this.state.items.concat(item)})
    // Check if the item has no category
    this.toggleSnackbar(item)
  }

  // Generic search for item in a list method - returns the object
 searchForItemInList = (item, list) => {
   // Determine which list to search, items or completedItems
    if(list === 'items') {
      var searchList = this.state.items;
    } else {
      searchList = this.state.completedItems;
    }
    // Search list and return match at index
    for(var i=0; i < searchList.length; i++){
      if (searchList[i].name === item.name){
        return searchList[i]
      }
    } return
  }

  // Generic remove from list method
  // Usually index argument will come from searchForItemInList() method
  removeFromList = (list, index) => {
    if(list === "items") {
      this.state.items.splice( index, 1 );
      this.setState({items: this.state.items});
    } else {
      this.state.completedItems.splice( index, 1 );
      this.setState({completedItems: this.state.completedItems});
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

  // Listen to search area input for the searchform component
  onFormChange = (event) => {
    this.setState({formField: event.target.value})
  }

  // Listen to search area input while filling out list item note
  onAddNote = (event) => {
    this.setState({itemNotes: event.target.value})
  }

  // On 'enter' add grocery item
  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.formField === '') {
      return;
    }
    // create new object from entered item
    const newItem = {
      'name': this.state.formField.charAt(0).toUpperCase(0) + this.state.formField.slice(1),
      'note': '',
      'id': Math.random().toString(36).substr(2, 9), // unique ID
    } 
    this.addToList(newItem)
    this.setState({formField: ''})
  }

  // Add item from Favorite Items list
  addFaveToList = (item, list) => {
    let myObjects = this.state.items;
    let map = new Set(myObjects.map(el=>el.name));
    if (map.has(item)) {
      return 
    } else {
        const newItem = {
          'name': item,
          'note': '',
          'id': Math.random().toString(36).substr(2, 9), // unique ID
        }
        this.addToList(newItem)
      } 
    }

    // Remove item from Favorite Items list
    removeFaveFromList = (item, list) => {
      const searchList = this.state.items
      for(var i=0; i < searchList.length; i++){
        if (searchList[i].name === item){
          this.removeFromList(list, searchList[i])
        }
      } 
    }

    handleCheckChildElement = (event) => {
      let items = this.state.favoriteItems
      items.forEach(item => {
         if (item.value === event.target.value)
         item.isChecked =  event.target.checked
         if(item.isChecked === true ) {
          this.addFaveToList(item.value, 'items')
         } 
          this.removeFaveFromList(item.value, 'items')
      })
    }

  // Acquire grocery item, move item from active to completed list
  onCompleteItem = (completedItem, groceryList) => {
    this.removeFromList(groceryList, this.searchForItemInList(completedItem, groceryList))
    this.setState({completedItems: this.state.completedItems.concat(completedItem)}); 
  }

  // Fully delete item from whichever list it is in 
  onDeleteItem = (deletedItem, list) => {
    this.removeFromList(list, this.searchForItemInList(deletedItem, list) )
  }

  // Readd item from completed list to grocery list
  onRecoverItem = (item, list) => {
    this.addToList(item)
    this.removeFromList(list, this.searchForItemInList(item, list))
  }

   // Modal functions for grocery list component
   modalOpen = (item, list) => {
    // Search list and return match at index
    for(var i=0; i < this.state.items.length; i++){
      if (this.state.items[i].name === item.name){
        var itemIndex = this.state.items.indexOf(this.state.items[i])
        var stateCopy = Object.assign({}, this.state);
        stateCopy.items[itemIndex] = Object.assign({}, stateCopy.items[itemIndex]);
        stateCopy.items[itemIndex].note = this.state.items[itemIndex].note;
        this.setState(stateCopy);
        this.setState({itemNotes: stateCopy.items[itemIndex].note})
      }
    } 
    this.setState({modalIsOpen: true});
   };
 
   modalClose = (item, list) => {
    for(var i=0; i < this.state.items.length; i++){
      if (this.state.items[i].name === item.name){
        var itemIndex = this.state.items.indexOf(this.state.items[i])
        var stateCopy = Object.assign({}, this.state);
        stateCopy.items = stateCopy.items.slice();
        stateCopy.items[itemIndex] = Object.assign({}, stateCopy.items[itemIndex]);
        stateCopy.items[itemIndex].note = this.state.itemNotes;
        this.setState(stateCopy);
        this.setState({itemNotes: ''})
      }
    }
    this.setState({modalIsOpen: false}); // Close modal
  };
  
  // Render
  render () {
    const { favoriteItems, formField, items, completedItems, snackbarIsOpen, itemNotes, modalIsOpen } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <FixedScroll>
            <TopNavigation>
              <TopNavigationTitle/>
              <TopNavigationCategories/>
              <TopNavigationFaves 
                addToList={this.addToList} 
                removeFromList={this.removeFromList}
                favoriteItems = {favoriteItems}
                addFaveToList = {this.addFaveToList}
                removeFaveFromList = {this.removeFaveFromList}
                handleCheckChildElement = {this.handleCheckChildElement}
              />
            </TopNavigation>
          </FixedScroll>
          <Box pt={11} maxWidth={600} mx={'auto'}>
            <Box mr={2} ml={2} pt={1.5} className={'White-container'}>
              <SearchArea
                formChange = {this.onFormChange}
                formSubmit = {this.onFormSubmit}
                formField = {formField}
                toggleSnackbar = {this.toggleSnackbar}
              />
              <GroceryList 
                itemNotes = { itemNotes }
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
              { items.length === 0 && completedItems.length === 0 && <EmptyList /> }
              <CompletedList 
                completedItems = { completedItems }
                deleteItem = {this.onDeleteItem}
                recoverItem = {this.onRecoverItem}
              />
            </Box>
          </Box>
          {
            snackbarIsOpen ? <UncategorizedItemSnackbar /> 
            : undefined
          }
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
