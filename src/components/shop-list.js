import React from "react";

class ShopList extends React.Component{
    render(){
        return(
            <div className="tesla-flex-card">
                <img className="photo" src={this.props.url} alt="My Image"/>
                <div className="tesla-container">
                    <div className="main-text">
                        {this.props.name}
                    </div>
                    <div className="price-text">
                        {this.props.price}
                    </div>
                    <div className="more-information">
                        {this.props.inf}
                    </div>
                    <div className="button-flex">
                        <button className={`button-order ${this.props.buttonClassName || ""}`}>
                            Order Now
                        </button>
                        <button className={`button-more ${this.props.buttonClassName || ""}`}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShopList