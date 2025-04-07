import React, {Component} from "react";
import Header from './components/header';
import ShopList from './components/shop-list';
import {fetchItems, addItem} from './API/api';
import OrderPage from "./components/OrderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showHeader: true,
            lastScrollY: 0,
            items: []
        };
    }

    handleScroll = () => {

        const currentScrollY = window.scrollY;

        if (currentScrollY > this.state.lastScrollY) {
            this.setState({ showHeader: false });
        } else {
            this.setState({ showHeader: true }); 
        }

        this.setState({ lastScrollY: currentScrollY });
    };

    componentDidMount() {
        this.loadItems();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    //Обрабатывает локальные данные
    loadItems = async () => {
        try {
            const items = await fetchItems();
            this.setState({ items });
        } catch (error) {
            console.error("Ошибка при загрузке товаров", error);
        }
    };

    render(){
        return(
            <Router>
                <div className="up">
                    <div className={`header ${this.state.showHeader ? "" : "hidden"}`}>
                        <Header />
                    </div>
                    <Routes>
                        <Route path="/" element={
                            <div className='scrol-panel'>
                                <ShopList 
                                    url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA-v3.png"
                                    name="Model Y"
                                    price="$299/mo Leasing"
                                    inf="From $31,4901 After Est. Savings"
                                />
                                <ShopList url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-2-Desktop-NA.png"
                                    name = "New Model Y"
                                    inf = "Deliveries Begin in March"
                                    />
                                <ShopList url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop-v3.png"
                                    name = "Cybertruk"
                                    price = "$749/mo Leasing"
                                    buttonClassName = "custom-button"/>
                            </div>
                        }/>
                        <Route path="/order" element={<OrderPage />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App
