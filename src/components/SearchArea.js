import React, { Fragment } from 'react';

// Import Material Design UI Components
import { TextField } from '@material-ui/core';

const SearchArea = ({ formChange,  formSubmit, formfield }) => {
  return (
    <Fragment>
      <form noValidate autoComplete="off" onSubmit = { formSubmit }>
        <TextField 
          id="standard-basic" 
          label="Add item"
          onChange = { formChange }
          value = {formfield}
          fullWidth
        />
      </form>
    </Fragment>
  )
}


export default SearchArea;