import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {

  onChange = (e) => {
    e.preventDefault();
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to={ '/products' } >STORE</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nb"
                  aria-controls="nb" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="nb">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={ '/products' } activeClassName="active">Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={ '/about' } activeClassName="active">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={ '/contact' } activeClassName="active">Contacto</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2"
                     type="search"
                     placeholder="Search"
                     onChange={ this.onChange } />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
