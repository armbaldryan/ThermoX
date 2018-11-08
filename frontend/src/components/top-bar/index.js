import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import isMobile from 'is-mobile';
import common from '@material-ui/core/colors/common';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './styles.scss';

export default class TopBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClick = event => {
        this.setState({ catalogueAnchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null, catalogueAnchorEl: null });
    };

    render() {
        const { auth, anchorEl, catalogueAnchorEl } = this.state;
        const open = Boolean(anchorEl);
        const isMobileFunc = isMobile();
        return (
            <div className="top-bar-navigation flex">
                <AppBar position="static">
                    <Toolbar>
                        <div className="flex horizontal menu-toolbar">
                            <div className="logo flex">
                            </div>
                            { isMobileFunc
                                ? (<IconButton className="menu-button" color="inherit" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>)
                                : null
                            }
                        <div className="menu-items aCenter flex">
                            <Menu
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                getContentAnchorEl={null}
                                className="drop-down-menu"
                                id="simple-menu"
                                anchorEl={catalogueAnchorEl}
                                open={!!catalogueAnchorEl}
                                onClose={this.handleClose}
                            >
                                <MenuItem>
                                    <Link to="/catalogue/thermox">ThermoX</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/catalogue/arktika">Арктика</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/catalogue">Все Термосы</Link>
                                </MenuItem>
                            </Menu>
                            <Typography
                                variant="h6"
                                color="inherit"
                                onClick={this.handleClick}
                            >
                                <Link to="/catalogue">Каталог</Link>
                            </Typography>
                            <Typography variant="h6" color="inherit" className="">
                                <Link to="/">Информация</Link>
                            </Typography>
                            <Typography variant="h6" color="inherit" className="">
                                <Link to="/">Контакты</Link>
                            </Typography>
                            <Typography variant="h6" color="inherit" className="">
                                <Link to="/">Блог</Link>
                            </Typography>
                        </div>
                        {auth && (
                            <div className="flex jEnd horizontal right-column">
                                <IconButton
                                    style={{ color: common.white }}
                                    className="shopping-cart-icon "
                                    aria-label="Add to shopping cart"
                                >
                                    <AddShoppingCartIcon />
                                </IconButton>
                                <IconButton
                                    className="aEnd"
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

TopBar.propTypes = {
};
