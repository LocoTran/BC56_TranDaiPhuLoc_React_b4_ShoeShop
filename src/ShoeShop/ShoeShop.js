import React, { Component } from "react";
import { shoeArr } from "./dataShoe";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import Detail from "./Detail";
import { message } from "antd";

export default class ShoeShop extends Component {
    state = {
        shoeArr: shoeArr,
        detail: shoeArr[0],
        cart: [],
        // cart: shoeArr,
    };

    handleViewDetail = (shoe) => {
        this.setState({ detail: shoe });
    };

    handleAddToCart = (shoe) => {
        let cloneCart = [...this.state.cart];
        let index = cloneCart.findIndex((item) => item.id === shoe.id);
        if (index === -1) {
            let newShoe = { ...shoe, soLuong: 1, totalPrice: shoe.price };
            cloneCart.push(newShoe);
        } else {
            ++cloneCart[index].soLuong;
            cloneCart[index].totalPrice =
                cloneCart[index].soLuong * cloneCart[index].price;
        }
        this.setState({ cart: cloneCart });
        message.success("Thêm sản phầm thành công!");
    };

    handleRemove = (shoeID) => {
        let cloneCart = [...this.state.cart];
        let index = cloneCart.findIndex((item) => item.id === shoeID);

        cloneCart.splice(index, 1);
        this.setState({ cart: cloneCart });
        message.success("Đã xóa sản phầm khỏi giỏ hàng!");
    };

    handleChangeQuantity = (shoeID, option) => {
        let cloneCart = [...this.state.cart];
        let index = cloneCart.findIndex((item) => item.id === shoeID);
        cloneCart[index].soLuong += option;
        cloneCart[index].totalPrice =
            cloneCart[index].soLuong * cloneCart[index].price;
        if (cloneCart[index].soLuong === 0) {
            cloneCart.splice(index, 1);
            message.success("Đã xóa sản phẩm do số lượng là 0!");
        }
        this.setState({ cart: cloneCart });
    };

    calcSumaryPrice = (shoeArr) => {
        return shoeArr.reduce((result, shoe) => {
            let { soLuong, price } = shoe;
            return result + soLuong * price;
        }, 0);
    };

    handleLength = (name) => {
        let maxLength = 9;
        if (name.length > maxLength) {
            return name.slice(0, maxLength) + "...";
        } else {
            return name;
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Cart
                        handleLength={this.handleLength}
                        calcSumaryPrice={this.calcSumaryPrice}
                        handleChangeQuantity={this.handleChangeQuantity}
                        cart={this.state.cart}
                        handleRemove={this.handleRemove}
                    />
                    <ListShoe
                        handleLength={this.handleLength}
                        handleAddToCart={this.handleAddToCart}
                        handleViewDetail={this.handleViewDetail}
                        shoeArr={this.state.shoeArr}
                    />
                </div>
                <div className="row">
                    <Detail detail={this.state.detail} />
                </div>
            </div>
        );
    }
}
