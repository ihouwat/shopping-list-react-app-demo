import React, { Fragment } from 'react';
import { Paper, Container, Box } from '@material-ui/core';
import TopNavigationCategories from './TopNavigationCategories';
import TopNavigationFaves from './TopNavigationFaves';

const TopNavigation = ({addNewToGroceries}) => {
  return (
    <Fragment>
      <Paper elevation={4} square={true}>
        <Container maxWidth="sm">
          <Box display="flex" alignItems="center" height={64}> 
            <Box fontSize={20} flexGrow={1} textAlign="left">
              <h1>My Shopping List</h1>
            </Box>
            <TopNavigationCategories/>
            <TopNavigationFaves addNewToGroceries={addNewToGroceries}/>
          </Box>
        </Container>
      </Paper>
    </Fragment>
  )
}

export default TopNavigation;