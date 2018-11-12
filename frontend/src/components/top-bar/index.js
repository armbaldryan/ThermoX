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
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink } from 'react-router-dom';

import './styles.scss';

export default class TopBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        isSubMenuOpen: false,
    };

    menuList = (<List disablePadding id='list-menu' style={{backgroundColor: 'rgba(0,0,0, .7)'}}>
        <ListItem button>
            <ListItemText  primary={<NavLink to="/catalogue/thermox">ThermoX</NavLink>} />
        </ListItem>
        <ListItem button>
            <ListItemText primary={<NavLink to="/catalogue/arktika">Арктика</NavLink>} />
        </ListItem>
        <ListItem button>
            <ListItemText primary={<NavLink to="/catalogue">Все Термосы</NavLink>} />
        </ListItem>
    </List>);

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClick = event => {
        this.setState({ 
            catalogueAnchorEl: event.currentTarget, 
        });
    };

    handleClose = () => {
        this.setState({ anchorEl: null, catalogueAnchorEl: null });
    };

    enterMenu = () => {
        this.setState({ isSubMenuOpen: true });
    };

    leaveMenu = (event) => {
        if (event.relatedTarget.toString().slice(1, 7) === 'object' || !event.relatedTarget.closest('#menu-catalogue')) {
            this.setState({ isSubMenuOpen: false });
        }
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

                            <Typography
                                variant="h6"
                                color="inherit"
                                id='menu-catalogue'
                                onMouseEnter={this.enterMenu}
                                onMouseLeave={this.leaveMenu}
                            >
                                <NavLink to="/catalogue">Каталог</NavLink>
                                <Collapse in={this.state.isSubMenuOpen}>
                                    {this.menuList}
                                </Collapse>
                            </Typography>
                            <Typography variant="h6" color="inherit" className="">
                                <NavLink to="/">Информация</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" className="">
                                <NavLink to="/">Контакты</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" className="">
                                <NavLink to="/">Блог</NavLink>
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
