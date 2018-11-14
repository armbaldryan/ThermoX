import React, { PureComponent } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import './styles.scss';

export default class SingleProduct extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            property: props.product.features[0].properties[0],
            size: props.product.features[0],
        }
    }
    
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

    clickSizeHandler = (size) => {
        this.setState({
            size,
            property: size.properties[0],
        })
    };

    clickColorHandler = (property) => {
        this.setState({
            property,
        })
    };

    clickHandler = () => {
        console.log('this.props :::', this.props);
        this.props.onClick(this.props.product);
    };
    
    render() {
        console.log('this.props :::', this.props);
        return (
            <Grid
                item
                md={4}
                xs={12}
            >
                <div className="catalogue-card-box">
                    <Grid className="container justify-xs-center">
                        <Avatar
                            onClick={this.clickHandler}
                            aria-label="Recipe"
                            image={this.state.property.mainImage}
                            src={this.state.property.mainImage}
                            className="card-image"
                        />
                    </Grid>
                    <Typography
                        className="card-title"
                        onClick={this.clickHandler}
                    >
                        {this.props.product.title}
                    </Typography>
                    <Typography
                        className="card-serial-number"
                        onClick={this.clickHandler}
                    >
                        {`Серия ${this.props.product.serialNumber}`}
                    </Typography>
                    <CardContent>
                        <div className="product-sizes flex jCenter">
                            {this.getSizes(this.props.product.features, this.state.size)}
                        </div>
                        <div className="product-colors flex jCenter">
                            {this.getColors(this.state.size.properties, this.state.property)}
                        </div>
                    </CardContent>
                </div>
            </Grid>
        );
    }
}
