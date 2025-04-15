import React, {Component} from "react";
import Header from './components/header';
import ShopList from './components/shop-list';
import {fetchProducts} from './API/api';
import OrderPage from "./components/OrderPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showHeader: true,
            lastScrollY: 0,
            products: [],
            loading: true,
            error: null
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
        this.loadProducts();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    //Обрабатывает локальные данные
    loadProducts = async () => {
        try {
            const response = await fetchProducts();
            this.setState({ products: response.data, loading: false });
        } catch (error) {
            console.error("Ошибка при загрузке товаров", error);
            this.setState({
                error: error.message,
                loading: false
            });
        }
    };

    render(){
        const { showHeader, products, loading, error } = this.state;

        if (loading) {
            return <div className="loading">Loading Tesla products...</div>;
        }

        if (error) {
            return (
                <div className="error">
                Error loading products: {error}
                <button onClick={this.loadProducts}>Retry</button>
                </div>
            );
        }

        return(
            <Router>
                <div className="up">
                    <div className={`header ${showHeader ? "" : "hidden"}`}>
                        <Header />
                    </div>
                    <Routes>
                        <Route path="/" element={
                            <div className='scrol-panel'>
                                {products.map(product => (
                                    <ShopList
                                        key={product._id}
                                        id={product._id}
                                        url={product.imageUrl}
                                        name={product.name}
                                        price={product.price}
                                        inf={product.description}
                                        specs={product.specs}
                                    />
                                    ))}
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
