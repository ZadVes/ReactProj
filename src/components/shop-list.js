import React from "react";

class ShopList extends React.Component{
    render(){
        return(
            <div className="tesla-flex-card">
                <img className="photo" src={this.props.url} alt="My Image"/>
            </div>
        )
    }
}

export default ShopList