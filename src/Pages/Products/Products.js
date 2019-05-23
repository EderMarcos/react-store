import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';

class Products extends Component {
  render() {
    let { products, query } = this.props;
    if (query) {
      products = products.filter(p => p.nombre.toLowerCase().indexOf(query.trim().toLowerCase()) >= 0)
    }

    return (
      <div className="container">
        <h2 className="my-4 text-center">Nuestros Productos</h2>

        <div className="card-columns">
          {
            products.map((product, id) => (
              <Card key={ id }
                    title={ product.nombre }
                    description={ product.descripcion }
                    footer={ product.precio.toString() }
                    image={ product.imagen }
                    isButtonVisible={ true }
                    linkTo={ `/products/${ product.id }`}/>
            ))
          }
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  query: PropTypes.string,
};

export default Products;
