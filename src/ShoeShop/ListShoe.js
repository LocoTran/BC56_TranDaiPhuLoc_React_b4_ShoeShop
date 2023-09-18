import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { shoeArr } from "./dataShoe";

export default class ListShoe extends Component {
    renderListShoe = () => {
        let { shoeArr } = this.props;
        return shoeArr.map((item, index) => {
            return (
                <ItemShoe
                    handleLength={this.props.handleLength}
                    handleAddToCart={this.props.handleAddToCart}
                    handleViewDetail={this.props.handleViewDetail}
                    item={item}
                    key={index}
                />
            );
        });
    };
    render() {
        return <div className="col-5 row p-0 m-0">{this.renderListShoe()}</div>;
    }
}
