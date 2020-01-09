import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import logo from './logo.svg';

import './Styles/App.css';
import "./Styles/styleFooter.css";
import './Styles/styleMain.css';
import './Styles/styleService.css';
import './Styles/stylePricing.css';

import Footer from './Containers/Footer';
import Header from './Containers/Header';
import Main from './Containers/Main';
import Services from './Containers/Services';
import PricingSection from './Containers/PricingSection';
import ErrorComponent from './Components/ErrorComponent';
import LoginComponent from './Components/LoginComponent';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/about" exact>
                            <Main />
                            <Footer logo={logo} />
                        </Route>
                        <Route path="/prices" exact>
                            <PricingSection></PricingSection>
                            <Footer logo={logo} />
                        </Route>
                        <Route path="/services" exact>
                            <Services />
                        </Route>
                        <Route path="/products" exact>

                        </Route>
                        <Route path="/login" exact>
                            <LoginComponent />
                        </Route>
                        <Route path="/register" exact>

                        </Route>
                        <Route path="/" exact >
                            <Main />
                            <Services />
                            <Footer logo={logo} />
                        </Route>
                        <Route>
                            <ErrorComponent errorCode="404" />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;