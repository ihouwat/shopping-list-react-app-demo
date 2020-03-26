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
      searchfield: ''
    }
  }

   // Methods
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    console.log(event.target.value)
  }

  render () {
    const { searchfield } = this.state;
    return (
      <div className="App">
        <header className="App-header">
         <h1>Shopping List</h1>
        </header>
        <ThemeProvider theme={theme}>
          <SearchArea searchChange = {this.onSearchChange}/>
          <GroceryList />
          <CompletedList />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
