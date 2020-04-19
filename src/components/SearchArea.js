/* eslint-disable no-use-before-define */
import React, { Fragment } from 'react';
import {TextField, makeStyles} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { groceriesTemplate } from '../groceriesTemplate';

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
  const [open, setOpen] = React.useState(false);
  const checkFormField = (event) => {
    if (formField === '') {
      setOpen(false)
    } 
    else{setOpen(true)}
  }

  const closeAutocomplete = (event, reason) => {
    if(reason === "select-option" || reason === "escape"){
      setOpen(false)
    }
  }

  const classes = useStyles();  
  return (
    <Fragment>
      <form noValidate onSubmit = { formSubmit }>
        <Autocomplete
          id="autocomplete-selector"
          freeSolo
          autoComplete
          autoHighlight
          clearOnEscape
          autoSelect
          variant="outlined" 
          className={classes.input}
          inputValue = { formField }
          open = {open}
          onOpen = {checkFormField}
          onClose = {closeAutocomplete}
          onChange = { autocompleteSelectValue }
          options={groceriesTemplate.map((option) => option.name)}
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