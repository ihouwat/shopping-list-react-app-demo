import React from 'react';

// Import Material Design UI Components
import { TextField, Fab } from '@material-ui/core';

const SearchArea = ({ formChange,  formSubmit, formfield }) => {
  return (
    <div>
      <Fab color="primary" aria-label="add" onClick = { formSubmit }>
        +
      </Fab>
      <form noValidate autoComplete="off" onSubmit = { formSubmit }>
        <TextField 
          id="standard-basic" 
          label="Add item"
          onChange = { formChange }
          value = {formfield}
        />
      </form>
    </div>
  )
}


export default SearchArea;