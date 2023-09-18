import React, { Component } from "react";

export default class Detail extends Component {
    renderDetail = (shoe) => {
        return (
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{shoe.name}</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                ×
                            </button>
                        </div>
                        {/* Modal body */}
                        <img
                            src={shoe.image}
                            alt=""
                            style={{
                                display: "block",
                                margin: "0 auto",
                                width: "50%",
                                objectFit: "contain",
                            }}
                        />
                        <div className="modal-body">
                            <p className="card-text">{shoe.description}</p>
                            <p className="card-text">{shoe.price} $</p>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="col-12 p-0">
                {this.renderDetail(this.props.detail)}
            </div>
        );
    }
}
