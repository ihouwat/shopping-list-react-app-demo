import React from 'react';
import { Snackbar, Slide } from '@material-ui/core';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const UncategorizedSnackbar = () => {
  const [open, setOpen] = React.useState(true);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(open)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        onEnter={handleClick(TransitionUp)}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={4000}
        message="Added item is uncategorized."
        onRequestClose={(reason) => {
        if (reason === 'clickaway') {
          return;
        }
      }}
      />
  </div>
  )
}

export default UncategorizedSnackbar;
