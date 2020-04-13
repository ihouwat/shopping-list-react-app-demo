import * as React from 'react';
// import styled from 'styled-components';
import ExpandableProperty from './ExpandableProperty';
import camelCaseToNormal from './camelCaseToNormal'
import { Typography,ListItem, List } from '@material-ui/core';

const RecursiveProperty = props => {
  return (React.createElement(RecursivePropertyContainer, { excludeBottomBorder: props.excludeBottomBorder }, props.property ? (typeof props.property === 'number' ||
      typeof props.property === 'string' ||
      typeof props.property === 'boolean' ? (React.createElement(React.Fragment, null,
      React.createElement(Typography, null,
          camelCaseToNormal(props.Typography),
          ": "),
      props.property.toString())) : ("It isn't a leaf")) : ('Property is empty')));
};
const camelCaseToNormal = (str) => str.replace(/([A-Z])/g, ' $1').replace(/^./, str2 => str2.toUpperCase());
export default RecursiveProperty;
 