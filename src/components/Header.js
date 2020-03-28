import React, { Fragment } from 'react';
import { Paper, Container, SvgIcon, IconButton, Box } from '@material-ui/core';

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
            <IconButton 
              disableFocusRipple
              size='medium'
              color='primary'
            >
              <SvgIcon  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 21" fill="black" width="19px" height="19px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </SvgIcon>
            </IconButton>
          </Box>
        </Container>
      </Paper>
    </Fragment>
  )
}

export default Header;