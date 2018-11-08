import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Catalogue from './catalogue';
import TopBar from './top-bar';
import "./styles.scss";

export default class App extends PureComponent{
    render() {
        return (
            <div>
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
                    </Switch>
                </main>
            </div>
        );
    }
}