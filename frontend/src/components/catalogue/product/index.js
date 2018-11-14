import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { fetchSingleProductById } from '../../../reducers/product';
import CircularProgress from '@material-ui/core/CircularProgress';
import { needsToFetch } from '../../../helpers';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import '../styles.scss';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
const uuidv1 = require('uuid/v1');

const mapStateToProps = (state) => ({
    product: state.product,
});

const mapDispatchToProps = {
    fetchSingleProductById
};
class Product extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            selectedProperty: null,
            properties: null,
        }
    }
    componentDidMount() {
        this.props.fetchSingleProductById(this.props.match.params.category, this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.product.payload.length) {
            console.log('nextProps :::', nextProps);
            this.setState({
                selectedProperty: nextProps.product.payload[0].features[0].properties[0],
                properties: nextProps.product.payload[0].features[0],
            })
        }
    }

    clickSizeHandler = (properties) => {
        this.setState({
            selectedProperty: properties.properties[0],
            properties: properties,
        })
    };

    clickColorHandler = (selectedProperty) => {
        this.setState({
            selectedProperty,
        })
    };

    getSizes = (features, selectedFeature) => features.map((feature) => <div
        key={feature._id}
        className={classNames('circle', {
            'selected': feature._id === selectedFeature._id,
        })}
        onClick={() => this.clickSizeHandler(feature)}
    >
        {feature.size}
    </div> );

    getColors = (properties, selectedProperty) => properties.map((property) => <div
        key={property._id}
        style={{ backgroundColor: property.color}}
        className={classNames('square', {
            'selected': selectedProperty._id === property._id,
        })}
        onClick={() => this.clickColorHandler(property)}
    /> );

    generateCharacteristics = (qualities) => (
        <ul>
            {
                qualities.map((quality) => (<li key={uuidv1()}>{quality}</li>))
            }
        </ul>
    );

    render() {
        console.log('this.props :::', this.props);
        return (
            <div>
                {
                    needsToFetch(this.props.product) && !this.state.selectedProperty && !this.state.properties
                        ? <CircularProgress color="secondary"/>
                        : <>
                            <div className="bread-crumbs">
                                <Typography
                                    children={`КАТАЛОГ ПРОДУКЦИИ → ${this.props.match.params.category} → ${this.props.product.payload[0].title}`}
                                />
                            </div>
                            <main className="container">
                                <Grid container spacing={24}>
                                    <Grid item xs={6}>
                                        <Paper className="product-left-paper">
                                            <img src={this.state.selectedProperty.mainImage} width="300" alt=""/>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="product-right-paper">
                                            <Typography
                                                className="product-title"
                                                variant="h6"
                                                children={this.props.product.payload[0].title}
                                            />
                                            <Typography
                                                className="product-serial-number"
                                                variant="h6"
                                                children={`Серия ${this.props.product.payload[0].serialNumber}`}
                                            />
                                            <Grid container spacing={24}>
                                            <Grid item xs={6}>
                                                <Typography
                                                    variant="h6"
                                                    children="Особенности"
                                                />
                                                {this.generateCharacteristics(this.props.product.payload[0].qualities)}
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CardContent>
                                                    <div className="product-sizes flex jCenter">
                                                        <Typography
                                                            variant="h6"
                                                            children="ВЫБРАТЬ РАЗМЕР (мл)"
                                                        />
                                                        <div className="colors flex">
                                                        {this.getSizes(this.props.product.payload[0].features, this.state.properties)}
                                                        </div>
                                                    </div>
                                                    <div className="product-colors flex jCenter">
                                                        <Typography
                                                            variant="h6"
                                                            children="ВЫБРАТЬ ЦВЕТ"
                                                        />
                                                        <div className="squares flex">
                                                        {this.getColors(this.state.properties.properties, this.state.selectedProperty)}
                                                        </div>
                                                    </div>
                                                    <Typography
                                                        className="product-size"
                                                        variant="h5"
                                                        children={`${this.state.selectedProperty.price} драм`}
                                                    />
                                                </CardContent>
                                            </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </main>
                        </>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
