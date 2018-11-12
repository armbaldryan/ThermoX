import React, { PureComponent } from 'react';
import "./styles.scss";
import Typography from '@material-ui/core/Typography';

export default class Footer extends PureComponent{
    render() {
        return (
            <footer className="footer">
                <Typography
                    color="inherit"
                    children="Hello from Footer"
                />
            </footer>
        );
    }
}