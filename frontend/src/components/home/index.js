import React, { PureComponent } from 'react';

export default class Home extends PureComponent{
    render() {
        console.log('this.props.match :::', this.props.match);
        return (
            <main>
                Hello from Home
            </main>
        );
    }
}