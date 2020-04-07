import React, { Fragment } from 'react';
import {SvgIcon, Box, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 100,
    padding: theme.spacing(5.5),
    fontSize: theme.spacing(10),
  },
  textDark: {
    marginTop: theme.spacing(4),
    color: theme.palette.text.primary,
    maxWidth: theme.spacing(35),
    fontSize: theme.spacing(2),
    fontWeight: 600,
  },
  textLight: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary,
    maxWidth: theme.spacing(35),
    fontSize: theme.spacing(1.7),
  },
}))

const EmptyList = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box
        p={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SvgIcon className={classes.icon}>  
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </SvgIcon>
        <Typography>
          <p  className={classes.textDark}>
          {'Your list is empty'}
          </p>
          <p className={classes.textLight}>
          {'Start adding things you need to make sure nothing is left. '}
          {'Pick your store to modify the layout of categories.'}
          </p>
        </Typography>
      </Box>
    </Fragment>
  )
}

export default EmptyList