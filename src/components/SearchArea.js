import React from 'react';

// Import Material Design UI Components
import { TextField, Fab } from '@material-ui/core';

const SearchArea = ({ searchChange }) => {
  return (
    <div>
      <Fab color="primary" aria-label="add">
        +
      </Fab>
      <form noValidate autoComplete="off">
        <TextField 
          id="standard-basic" 
          label="Add item"
          onChange = { searchChange }
        />
      </form>
    </div>
  )
}


export default SearchArea;