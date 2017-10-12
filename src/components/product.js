import React, { Component } from 'react';
import abstract from '../abstract.jpg';


class Product extends Component {
    render() {
        return (
            <div className="card">
                <img className ="card-img-top" src={abstract} alt="Product"></img>
                <div className ="card-block">
                    <h4 className ="card-title">{this.props.title}</h4>
                    <p className ="card-text"> Price:{this.props.price}</p>
                    <a href="#" className="btn btn-primary"> Ajouter à la WishList </a>
                </div>
            </div>
        );
    }
}

export default Product;