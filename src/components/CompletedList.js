import React, { Fragment } from 'react';

// Import Material Design UI Components
import { makeStyles, List, ListItem, ListItemText, ListItemIcon, Typography, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails } from '@material-ui/core';

// Expansion Panel styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  panel: {
    boxShadow: 'none',
    backgroundColor: '#fafafa',
  },
  summary: {
    padding: '0 16px',
    marginRight: '27px',
  },
  details: {
    padding: '0',
    textDecoration: 'line-through',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const CompletedList = ({ deleteditems }) => {
  //Expansion panel settings from Material-UI
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const deletedCount = deleteditems.length;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Compiling list
  const listItems = deleteditems.map((item, index) => {
    return (
    <ListItem button key={index}>
      <ListItemText secondary = {item}  />
      <ListItemIcon >
      </ListItemIcon>
    </ListItem>
    )
  })

    if(deleteditems.length === 0) {
      return null;
    }
    return (
    <Fragment className={classes.root}>
      <ExpansionPanel className={classes.panel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={'+'}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.summary}
        >
          <Typography className={classes.heading}>{deletedCount} checked off</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <List component="li" aria-label="deleted items">
            {listItems}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  )
}

export default CompletedList;