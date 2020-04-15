import React, {Component, Fragment } from 'react';
import UncategorizedListItems from './UncategorizedListItems'
import CategorizedListItems from './CategorizedListItems'
// Import Material Design UI Components


class GroceryList extends Component {
  render() {
    const {...props} = this.props;
    const {category} = this.props;
    return (
      <Fragment>
        {category === 'Order Entered' || category === 'Alphabetical' 
        ? <UncategorizedListItems {...props}/>
        : <CategorizedListItems {...props}/>
        }
      </Fragment>
    )
  }
}

export default GroceryList;