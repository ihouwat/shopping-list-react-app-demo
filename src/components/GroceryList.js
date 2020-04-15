import React, {Component, Fragment } from 'react';
import UncategorizedListItems from './UncategorizedListItems'
import CategorizedListItems from './CategorizedListItems'
// Import Material Design UI Components


class GroceryList extends Component {
  render() {
    const {...props} = this.props;
    const {category, groceryItems} = this.props;
    return (
      <Fragment>
        {groceryItems.length > 0 
          ?
            category === 'Order Entered' || category === 'Alphabetical' 
            ? <UncategorizedListItems {...props}/>
            : <CategorizedListItems {...props}/>
            
          : null
          }
      </Fragment>
    )
  }
}

export default GroceryList;