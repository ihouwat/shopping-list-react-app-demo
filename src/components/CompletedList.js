import React, { Fragment } from 'react';

// Import Material Design UI Components
import { makeStyles, List, ListItem, ListItemText, ListItemIcon, Typography, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, IconButton, SvgIcon } from '@material-ui/core';

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
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  list: {
    width: '100%',
  }
}));

const CompletedList = ({ completedItems, deleteItem, recoverItem }) => {
  //Expansion panel settings from Material-UI
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Compiling list
  const listItems = completedItems.map((item, index) => {
    return (
    <ListItem button key={index}>
      <ListItemText secondary = {item}  />
      <ListItemIcon>
        <IconButton inputProps={{ 'aria-labelledby': 'trash' }}>
          <SvgIcon onClick={deleteItem.bind(this, `${item}`, 'completeditems')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </SvgIcon>
        </IconButton>
      </ListItemIcon>
      <ListItemIcon>
        <IconButton inputProps={{ 'aria-labelledby': 'trash' }}>
          <SvgIcon onClick={recoverItem.bind(this, `${item}`, 'completeditems')}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </SvgIcon>
        </IconButton>
      </ListItemIcon>
    </ListItem>
    )
  })

    if(completedItems.length === 0) {
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
          <Typography className={classes.heading}>{completedItems.length} checked off</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <List component="li" aria-label="completed items" className={classes.list}>
            {listItems}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  )
}

export default CompletedList;