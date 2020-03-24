import React, { Component } from 'react';

// Import Material Design UI Components
import { TextField, Fab } from '@material-ui/core';

class SearchArea extends Component {
  render () {
    return (
      <div>
        <Fab color="primary" aria-label="add">
          +
        </Fab>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Type in item" />
        </form>
      </div>
    )
  }
}

export default SearchArea;