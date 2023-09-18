import React, { Component } from "react";

export default class ItemShoe extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="card text-left col-3">
                <img
                    className="card-img-top"
                    src={item.image}
                    alt=""
                    style={{
                        height: "50px",
                        objectFit: "cover",
                        display: "inline-block",
                        margin: "0 auto",
                    }}
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.handleLength(item.name)}
                    </h4>
                    <p className="card-text">{item.price}$</p>
                    <button
                        className="btn btn-primary mt-1"
                        onClick={() => {
                            this.props.handleViewDetail(this.props.item);
                        }}
                        data-toggle="modal"
                        data-target="#myModal"
                    >
                        View
                    </button>
                    <button
                        className="btn btn-success my-2"
                        onClick={() => {
                            this.props.handleAddToCart(item);
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
