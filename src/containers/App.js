import React, { Component } from 'react';
import './App.css';
// Import Components
import SearchArea from '../components/SearchArea';
import GroceryLists from '../components/GroceryLists';
import CompletedList from '../components/CompletedList';
import EmptyList from '../components/EmptyList';
import TopNavigation from '../components/TopNavigation';
import TopNavigationTitle from '../components/TopNavigationTitle';
import TopNavigationCategoryDisplay from '../components/TopNavigationCategoryDisplay';
import TopNavigationFaves from '../components/TopNavigationFaves';
import FixedScroll from '../components/FixedScroll';
// Import Material Design UI Custom Theme API
import {  Box } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Material Design UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0040cb',
      light: '#e7e9fa',
      dark: '#002bb3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#cb0040',
      light: '#fce2e7',
      dark: '#a3003c',
      contrastText: '#000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.70)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
  },
  spacing: 8,
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      formField: '',
      items: [],
      completedItems: [],
      category: 'Fresh Thyme',
      favoriteItems: [
        {value: 'Hummus', isChecked: false, id: Math.random().toString(36).substr(2, 9),},
        {value: 'Chocolate Chips', isChecked:false, id: Math.random().toString(36).substr(2, 9),},
        {value: 'Black Beans', isChecked: false, id: Math.random().toString(36).substr(2, 9),},
        {value: 'Apples', isChecked: false, id: Math.random().toString(36).substr(2, 9),},
      ],
      modalIsOpen: false,
      modalItemName: '',
      itemNotes: '',
    }
    this.onCompleteItem = this.onCompleteItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onRecoverItem = this.onRecoverItem.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  // Methods

  // Generic add grocery method
  addToList = (item) => {
    // Add item to list
    this.setState({items: this.state.items.concat(item)})
  }

  // Helper method to search for item in a list method - returns the object index
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
        return searchList.indexOf(searchList[i])
      }
    } return
  }

  // Helper method to remove item from list
  // Index argument received from searchForItemInList() method
  removeFromList = (list, index) => {
    if(list === "items") {
      this.state.items.splice( index, 1 );
      this.setState({items: this.state.items});
    } else {
      this.state.completedItems.splice( index, 1 );
      this.setState({completedItems: this.state.completedItems});
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
    // Create new object from entered item
    const newItem = {
      'name': this.state.formField.charAt(0).toUpperCase(0) + this.state.formField.slice(1),
      'note': '',
      'id': Math.random().toString(36).substr(2, 9), // unique ID
    } 
    this.addToList(newItem)
    this.setState({formField: ''})
  }

  // Checks grocery list for matches with favorite items
  // Toggles checkbox in Favorite Items modal depending on grocery list content
  // Adds/deletes items to the list
  faveCheckChildElement = (event) => {
    let favoriteItems = this.state.favoriteItems
    let stateItems = this.state.items;
    let map = new Set(stateItems.map(el=>el.name.toLowerCase()));
    //Toggle checkbox
    favoriteItems.forEach(item => {
      if (item.value === event.target.value)
      item.isChecked =  event.target.checked
    })
    
    //Search grocery list and add/remove items accordingly
    favoriteItems.forEach(item => {
      let faveLowerCase = item.value.toLowerCase()
      if(item.isChecked && !map.has(faveLowerCase)) {
        const newItem = {
          'name': item.value,
          'note': '',
          'id': Math.random().toString(36).substr(2, 9), // unique ID
        }
        this.addToList(newItem)
      } else if (!item.isChecked && map.has(faveLowerCase)) {
        for(var i=0; i < this.state.items.length; i++){
          if (this.state.items[i].name.toLowerCase() === faveLowerCase){
            var stateCopy = Object.assign({}, this.state);
            stateCopy.items[i] = Object.assign({}, stateCopy.items[i]);
            this.removeFromList('items', i)
          }
        } 
      }
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
    this.removeFromList(list, this.searchForItemInList(item, list))
    this.addToList(item)
  }

  // Remove all completed items from completed List
  onDeleteAllCompleted = () => {
    this.setState({completedItems: []})
  }

    // Readd all completed items to grocery list
  onRecoverAllCompleted = () => {
    const completedList = this.state.completedItems;
    let newItems = [...this.state.items];
    newItems = newItems.concat(completedList);
    this.setState({ items: newItems });
    this.setState({completedItems: []})
  }

   // Modal open method for grocery list component
   // For adding notes to grocery list item
   modalOpen = (item, list) => {
     // Search list and return match at index
     for(var i=0; i < this.state.items.length; i++){
       if (this.state.items[i].name === item.name){
        var stateCopy = Object.assign({}, this.state);
        stateCopy.items[i] = Object.assign({}, stateCopy.items[i]);
        stateCopy.items[i].note = this.state.items[i].note;
        this.setState(stateCopy);
        this.setState({modalItemName: stateCopy.items[i].name})
        this.setState({itemNotes: stateCopy.items[i].note})
      }
    } 
    this.setState({modalIsOpen: true});
   };
 
    // Modal close method for grocery list component
    // Saves note to state
   modalClose = () => {
    for(var i=0; i < this.state.items.length; i++){
      if (this.state.items[i].name === this.state.modalItemName){
        var stateCopy = Object.assign({}, this.state);
        stateCopy.items = stateCopy.items.slice();
        stateCopy.items[i] = Object.assign({}, stateCopy.items[i]);
        stateCopy.items[i].note = this.state.itemNotes;
        this.setState(stateCopy);
        this.setState({itemNotes: ''})
      }
    }
    this.setState({modalIsOpen: false}); // Close modal
  };

  // Category menu handle to change category or grocery store
  onCategoryChange = (route) => {
    this.setState({category: route});
  }
  
  // Render
  render () {
    const { category, modalItemName, favoriteItems, formField, items, completedItems, itemNotes, modalIsOpen } = this.state;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <FixedScroll>
            <TopNavigation>
              <TopNavigationTitle/>
              <TopNavigationCategoryDisplay 
                category = {category}
                onCategoryChange = {this.onCategoryChange}
              />
              <TopNavigationFaves 
                items = {items}
                favoriteItems = {favoriteItems}
                faveCheckChildElement = {this.faveCheckChildElement}
              />
            </TopNavigation>
          </FixedScroll>
          <Box pt={11} maxWidth={600} mx={'auto'}>
            <Box mr={2} ml={2} pt={1.5} className={'White-container'}>
              <SearchArea
                formChange = {this.onFormChange}
                formSubmit = {this.onFormSubmit}
                formField = {formField}
              />
              <GroceryLists 
                category = { category }
                itemNotes = { itemNotes }
                modalIsOpen = { modalIsOpen }
                modalItemName  = { modalItemName }
                modalClose = { this.modalClose }
                modalOpen = { this.modalOpen }
                onAddNote = { this.onAddNote }
                groceryItems = { items } 
                completeItem = {this.onCompleteItem}
                deleteItem = {this.onDeleteItem}
                items = {items}
              />
            </Box>
            <Box mr={2} ml={2}>
              { items.length === 0 && completedItems.length === 0 && <EmptyList /> }
              <CompletedList 
                completedItems = { completedItems }
                deleteItem = {this.onDeleteItem}
                recoverItem = {this.onRecoverItem}
                deleteallcompleted = {this.onDeleteAllCompleted}
                recoverallcompleted = {this.onRecoverAllCompleted}
              />
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
