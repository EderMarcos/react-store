import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { root } = this.props;

    return (
      <div>
        <Link className="btn btn-primary" to={ root }>
          <i className="fas fa-arrow-left mr-2" />
          Regresar
        </Link>
      </div>
    );
  }
}

Navbar.propTypes = {
  root: PropTypes.string.isRequired,
};

export default Navbar;
