import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div>
                <button className="button-header">
                    {this.props.title}
                </button>
            </div>
        )
    }
}
export default Header