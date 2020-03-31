import React, { Fragment } from 'react';
import { Paper, Container, Box } from '@material-ui/core';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <Fragment>
      <Paper 
        elevation={4}
        square={true}
      >
        <Container maxWidth="sm">
          <Box 
            display="flex" 
            justifyContent="space-between"
            alignItems="center"
            height={64}
          > 
            <Box fontSize={20}>
              <h1>My Shopping List</h1>
            </Box>
            <HeaderMenu/>
          </Box>
        </Container>
      </Paper>
    </Fragment>
  )
}

export default Header;