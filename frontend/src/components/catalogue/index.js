import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from '../../actions/products/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import { needsToFetch } from '../../helpers';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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
        return (
            <main>
                {
                    needsToFetch(this.props.products)
                        ? <CircularProgress color="secondary"/>
                        :       <Card>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe">
                                        R
                                    </Avatar>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                }
            </main>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
