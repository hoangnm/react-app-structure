/*
    USE AND INTERFACE DOCUMENTATION GOES AT TOP OF FILE
 */


import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import styles from './<%= pascalEntityName %>.container.styles';

export class <%= pascalEntityName %>Container extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View />
    );
  }
}

<%= pascalEntityName %>Container.propTypes = {

};

const mapStateToProps = state => ({
  someValue: state.someValue,
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = {
  someProp: someReducerActions.reducerAction
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= pascalEntityName %>Container);
