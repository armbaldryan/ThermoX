import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from '../../reducers/products/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import { needsToFetch } from '../../helpers';
import SingleProduct from '../list-items/product';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

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
            <div>
                <div className="bread-crumbs">
                    <Typography
                        children="КАТАЛОГ ПРОДУКЦИИ → "
                    />
                </div>
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
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
