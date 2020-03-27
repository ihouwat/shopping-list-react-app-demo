import React, { Component } from 'react';
import './App.css';

// Import Components
import SearchArea from '../components/SearchArea';
import GroceryList from '../components/GroceryList';
import CompletedList from '../components/CompletedList';

// Import Material Design UI Custom Theme API
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// Material Design UI theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      formfield: '',
      item: []
    }
  }

   // Methods
  onFormChange = (event) => {
    this.setState({formfield: event.target.value})
    // console.log('onFormChange function', event.target.value)
    console.log('3', this.state.item)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.formfield === '') {
      return;
    }
    const newItem = this.state.formfield;
    this.setState({item: this.state.item.concat(newItem)})
    this.setState({formfield: ''})
  }

  render () {
    const { formfield, item } = this.state;
    return (
      <div className="App">
        <header className="App-header">
         <h1>Shopping List</h1>
        </header>
        <ThemeProvider theme={theme}>
          <SearchArea 
            formChange = {this.onFormChange}
            formSubmit = {this.onFormSubmit}
            formfield = {formfield}
          />
          <GroceryList groceryitem = { item } />
          <CompletedList />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
