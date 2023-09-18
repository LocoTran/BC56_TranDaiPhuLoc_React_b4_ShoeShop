import React, { Component } from "react";

export default class Cart extends Component {
    renderCart = () => {
        return this.props.cart.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{this.props.handleLength(item.name)}</td>
                    <td>
                        <img src={item.image} alt="" className="w-75" />
                    </td>
                    <td>{item.price}$</td>
                    <td className="col-3">
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                this.props.handleChangeQuantity(item.id, -1);
                            }}
                        >
                            -
                        </button>
                        <strong className="mx-2">{item.soLuong}</strong>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                this.props.handleChangeQuantity(item.id, 1);
                            }}
                        >
                            +
                        </button>
                    </td>
                    <td>{item.totalPrice}$</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                this.props.handleRemove(item.id);
                            }}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <div className="col-7">
                <div id="tableCart">
                    <table className="table border text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price/Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderCart()}</tbody>
                    </table>
                    <h3 className="text-center">
                        Sumary Price:{" "}
                        {this.props.calcSumaryPrice(this.props.cart)}$
                    </h3>
                </div>
            </div>
        );
    }
}
