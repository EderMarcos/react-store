import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from '../components/Error/Error';
import data from '../data';
import Products from './Products/Products';
import Header from '../components/Header/Header';
import Product from './Products/Product';
import About from './About/About';
import Contact from './Contact/Contact';

class Router extends Component {

  state = {
    products: data,
    q: null
  };

  onSearch = q => this.setState({ q });

  render() {
    const { products, q } = this.state;

    return (
      <BrowserRouter>
        <Header onSearch={ this.onSearch } />
        <Switch>
          <Route exact path="/" render={ () => <Products products={ products } query={ q } /> } />
          <Route exact path="/products" render={ () => <Products products={ products } query={ q } /> } />
          <Route exact path="/products/:id" render={ (props) => <Product product={ products[props.match.params.id] } /> } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/contact" component={ Contact } />
          <Route render={ () => <Error message="Pagina no encontrada" /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
