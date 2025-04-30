import React from "react";
import {useNavigate} from "react-router-dom";
import {createOrder} from "../API/api";

class ShopList extends React.Component{
    handleOrder = async () => {
        try {
          await createOrder({
            product: {
              name: this.props.name,
              price: this.props.price
            }
          });
          this.props.navigate('/order-success');
        } catch (error) {
          console.error('Order failed:', error);}
    };

    render(){
        console.log('Rendering product:', this.props.name);
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
                    <div className="specs-text">
                        {this.props.specs}
                    </div>
                    {this.props.specs && this.props.specs.length > 0 && (
                        <div className="specs-list">
                            <ul>
                                {this.props.specs.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="button-flex">
                        <button className={`button-order ${this.props.buttonClassName || ""}`} onClick={this.handleOrder}>
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


export default function(props) {
    const navigate = useNavigate();
    return <ShopList {...props} navigate={navigate} />;
}