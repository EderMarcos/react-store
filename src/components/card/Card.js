import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, description, footer, image, isButtonVisible, linkTo } = this.props;

    return (
      <div className="card">
        <img src={ `/images/${ image }.png` } className="card-img-top" alt={ title } />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ description }</p>
          <h6 className="card-subtitle mb-4">Precio: ${ footer }</h6>
          {
            isButtonVisible ? <Link to={ linkTo } className="btn btn-light btn-block">Ver más</Link> : ''
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  image: PropTypes.string,
  isButtonVisible: PropTypes.bool,
  linkTo: PropTypes.string,
};

export default Card;
