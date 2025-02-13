import React from 'react';
import Header from './components/header';

class App extends React.Component{
    render(){
        return(
            <div className="up">
                <Header title="Vehicalse"/>
                <Header title="Energy"/>
                <Header title="Charging"/>
                <Header title="Discover"/>
                <Header title="Shop"/>
                <Header title="Bob"/>
                <button>Hy, bro</button>
            </div>
        )
    }
}

export default App