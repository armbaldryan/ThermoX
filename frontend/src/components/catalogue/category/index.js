import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { fetchProductsBySlug } from '../../../reducers/category-products';
import CircularProgress from '@material-ui/core/CircularProgress';
import { needsToFetch } from '../../../helpers';
import SingleProduct from '../../list-items/product';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../styles.scss';

const mapStateToProps = (state) => ({
    product: state.categoryProducts,
});

const mapDispatchToProps = {
    fetchProductsBySlug
};
class Category extends PureComponent{
    static contextTypes = {
        router: PropTypes.object,
    };

    componentDidMount() {
        this.props.fetchProductsBySlug(this.props.match.params.category);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.category !== nextProps.match.params.category) {
            this.props.fetchProductsBySlug(nextProps.match.params.category);
        }
    }

    generateCatalogueProducts = (products) => products.map((product) => <SingleProduct
        onClick={this.clickHandler}
        key={product._id}
        product={product}
    />);

    clickHandler = (product) => this.context.router.history.push(`/catalogue/${this.props.match.params.category}/${product._id}`);

    render() {
        return (
            <div>
                <div className="bread-crumbs">
                    <Typography
                        children={`КАТАЛОГ ПРОДУКЦИИ → ${this.props.match.params.category}`}
                    />
                </div>
                <main className="container">
                    {
                        needsToFetch(this.props.product)
                            ? <CircularProgress color="secondary"/>
                            : <Grid container spacing={24}>
                                {
                                    this.generateCatalogueProducts(this.props.product.payload)
                                }
                            </Grid>
                    }
                </main>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category);
