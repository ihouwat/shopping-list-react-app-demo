import React, { Fragment } from 'react';
import {Typography, SvgIcon, MenuItem, makeStyles} from '@material-ui/core';
import {listOfCategories} from '../groceryStores';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: theme.palette.text.secondary,
    display: 'flex',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  menuSVG: {
    flexBasis: '20%',
    paddingRight: theme.spacing(1.5),
    color: theme.palette.text.secondary,
  },
  menuTypography: {
    fontSize: theme.spacing(1.75),
  },
}))


const TopNavigationCategoryList = ({handleClose, category, onCategoryChange}) => {
  const classes = useStyles();
  const mapCategories= listOfCategories.map((item, index) => {
    return (
      <MenuItem className={classes.menuItem} key={index} onClick={() => {
        onCategoryChange(item)
        handleClose();
      }}>
        <SvgIcon className={classes.menuSVG} fontSize="small">
          {category === item
            ? <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="false" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{display: 'none'}} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          }
        </SvgIcon>
        <Typography className={classes.menuTypography}>
          {item}
        </Typography>
      </MenuItem>
    )
  })

  return (
    <Fragment>
      {mapCategories}
    </Fragment>
  )
}

export default TopNavigationCategoryList;