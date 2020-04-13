  
import * as React from 'react';
import { Typography} from '@material-ui/core';

export default class ExpandableProperty extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: !!this.props.expanded
        };
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Typography, { onClick: () => this.setState({ isOpen: !this.state.isOpen }) },
                this.props.title,
                this.state.isOpen ? '-' : '+'),
            this.state.isOpen ? this.props.children : null,
            React.Children.count(this.props.children) === 0 && this.state.isOpen ? 'The list is empty!' : null));
    }
}