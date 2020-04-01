import React, { Fragment } from 'react';

// Import Material Design UI Components
import { TextField, Box } from '@material-ui/core';

const SearchArea = ({ formChange,  formSubmit, formfield }) => {
  return (
    <Fragment>
     <Box pr={2} pl={2} pb={2}>
      <form noValidate autoComplete="off" onSubmit = { formSubmit }>
        <TextField 
          id="standard-basic" 
          label="Add item"
          onChange = { formChange }
          value = {formfield}
          fullWidth
        />
      </form>
     </Box>
    </Fragment>
  )
}


export default SearchArea;