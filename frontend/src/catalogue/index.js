import React, { PureComponent } from 'react';

export default class Catalogue extends PureComponent{
    
    componentDidMount() {
        fetch('/api/catalogue')
            .then((response) => {
                return response.json();
            })
            .then((data) => console.log('data :::', data))
            .catch( (err) => console.log('err :::', err))
    }

    render() {
        return (
            <main>
                Hello from Catalogue
            </main>
        );
    }
}