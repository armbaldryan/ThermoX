import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from '../actions/products';

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps = {
    fetchProducts
};
class Catalogue extends PureComponent{
    
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        console.log('this.props :::', this.props);
        return (
            <main>
                Hello from Catalogue
            </main>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
