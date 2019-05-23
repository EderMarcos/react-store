import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
  render() {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Opps!</h4>
        <p>{ this.props.message || 'Algo ha salido mal' }</p>
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
