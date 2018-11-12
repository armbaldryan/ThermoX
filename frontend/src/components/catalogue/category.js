import React, { PureComponent } from 'react';

export default class Category extends PureComponent{
    render() {
        console.log('this.props.match :::', this.props.match);
        return (
            <main>
                Hello from {this.props.match.params.category}
            </main>
        );
    }
}