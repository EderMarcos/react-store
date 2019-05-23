import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from '../../components/Error/Error';
import Card from '../../components/card/Card';
import Navbar from '../../components/Navbar/Navbar';

class Product extends Component {
  render() {
    const { product } = this.props;
    if (!product) return <Error message="El id no es valido" />;

    return (
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <Navbar root="/products" />
          </div>
          <div className="col-lg-5">
            <Card title={ product.nombre }
                  description={ product.descripcion }
                  footer={ product.precio.toString() }
                  image={ product.imagen } />
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
