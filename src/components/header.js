import React from "react";

class Header extends React.Component {
    render(){
        return(
            <button className="header">
                {this.props.title}
            </button>
        )
    }
}
export default Header