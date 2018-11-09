import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from '../../actions/products/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import { needsToFetch } from '../../helpers';
import SingleProduct from '../list-items/product';
import './styles.scss';

import Grid from '@material-ui/core/Grid';

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

    generateCatalogueProducts = (products) => products.map((product) => <SingleProduct
        key={product._id}
        product={product}
    />);

    render() {
        return (
            <main className="container">
                {
                    needsToFetch(this.props.products)
                        ? <CircularProgress color="secondary"/>
                        : <Grid container spacing={24}>
                            {
                                this.generateCatalogueProducts(this.props.products.payload)
                            }
                        </Grid>
                }
            </main>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
