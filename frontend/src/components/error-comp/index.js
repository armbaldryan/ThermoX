import React, { PureComponent } from 'react';

export default class ErrorComp extends PureComponent{
    render() {
        console.log('this.props.match :::', this.props.match);
        return (
            <main>
                Error 404
            </main>
        );
    }
}