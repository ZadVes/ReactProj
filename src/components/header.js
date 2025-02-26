import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div className="header-main">
                <img className="logo" src={require("../imeges/image.png")} alt="My Image"/>
                <div className="button">
                    <button className="button-header">
                        Vehicalse
                    </button>
                    <button className="button-header">
                        Energy
                    </button>
                    <button className="button-header">
                        Charging
                    </button>
                    <button className="button-header">
                        Discover
                    </button>
                    <button className="button-header">
                        Shop
                    </button>
                </div>
            </div>
        )
    }
}
export default Header