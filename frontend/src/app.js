import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './components/home';
import Catalogue from './components/catalogue';
import TopBar from './components/top-bar';
import ErrorComp from './components/error-comp';
import Footer from './components/footer';
import Category from './components/catalogue/category';
import "./styles.scss";

class App extends PureComponent{
    render() {
        return (
            <div className="main-content">
                <TopBar/>
                <main>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            exact
                            path="/catalogue"
                            component={Catalogue}
                        />
                        <Route
                            exact
                            path="/catalogue/:category"
                            component={Category}
                        />
                        <Route
                            component={ErrorComp}
                        />
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);