import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product';


import HttpService from './services/http-server';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
    //bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);


    this.loadData();
  }

  loadData = () => {
    let self = this;
    http.getProducts().then(data => {
      self.setState({products: data});
    }, err => {

    });
  }
  productList = () => {
    const list = this.state.products.map((product) =>
      <div className="col-sm-4" key={product._id}>
        <Product title={product.title} price={product.price} imgUrl={product.umgUrl} />
      </div>
    )
    return (list);
  }
  render() {
    return (
      <div className="container App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div>
          <div>
            {this.productList()}
          </div>
          </div>
      </div>
    );
  }
}

export default App;
