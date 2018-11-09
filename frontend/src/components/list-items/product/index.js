import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './styles.scss';
export default class SingleProduct extends PureComponent{

    render() {
        console.log('this.props :::', this.props);
        return (
            <Grid
                item
                md={4}
                xs={12}
            >
                <div className="catalogue-card-box">
                    <Card>
                        <CardHeader
                            className="card-header"
                            avatar={
                                <Avatar
                                    aria-label="Recipe"
                                    src={this.props.product.features[0].properties[0].image}
                                    className="card-image"
                                />
                            }
                        />
                        <Typography component="p">
                            {this.props.product.title}
                        </Typography>
                        <CardMedia
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography component="p">
                                {this.props.product.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
        );
    }
}
