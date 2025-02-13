import React from 'react';
import Header from './components/header';
import ShopList from './components/shop-list';

class App extends React.Component{
    render(){
        return(
            <div className="up">
                <div className='header'>
                    <Header title="Vehicalse"/>
                    <Header title="Energy"/>
                    <Header title="Charging"/>
                    <Header title="Discover"/>
                    <Header title="Shop"/>
                    <Header title="Bob"/>
                </div>
                <div className='scrol-panel'>
                    <ShopList url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA-v3.png"/>
                    <ShopList url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-2-Desktop-NA.png"/>
                </div>
            </div>
        )
    }
}

export default App