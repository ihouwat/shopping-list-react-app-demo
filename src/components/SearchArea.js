/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import {TextField, makeStyles} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  input: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(0.75),
  },
  textField: {
    marginTop: theme.spacing(0.25),
  }
}));

const SearchArea = ({ formChange,  formSubmit, formField, autocompleteSelectValue, autocompleteField }) => {
  const classes = useStyles();  
  return (
    <Fragment>
      <form noValidate onSubmit = { formSubmit }>
        <Autocomplete
          id="autocomplete-selector"
          freeSolo
          autoComplete
          variant="outlined" 
          clearOnEscape
          selectOnFocus
          className={classes.input}
          // value = { autocompleteField }
          onChange = { autocompleteSelectValue }
          options={groceries.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params}     
              onChange = { formChange }
              freeSolo 
              value = { formField }
              label="Add item" 
              fullWidth
              autoFocus
              margin="normal" 
              id="searchfield"
              className={classes.textField}
            />
          )}
        />
      </form>
    </Fragment>
  )
}

export default SearchArea

const groceries = [
  { name: 'Apple', count: 0 },
  { name: 'Apples', count: 0 },
  { name: 'Banana', count: 0 },
  { name: 'Bananas', count: 0 },
  { name: 'Oatmeal', count: 0 },
]