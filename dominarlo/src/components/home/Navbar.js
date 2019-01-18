import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';

import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    width: '100%',
  },
  Logo:{
    desplay:'flex',

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },

    link: {
      margin: theme.spacing.unit,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
  
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Link href='' color="inherit" className={classes.link}>
           Welcom
              </Link>
        </MenuItem>
        <MenuItem>
          <Link href='' color="inherit" className={classes.link}>
           Tools
              </Link>
        </MenuItem>
        <MenuItem>
          <Link href='' color="inherit" className={classes.link}>
        AboutUS 
              </Link>
        </MenuItem>
        <MenuItem>
          <Link href='' color="inherit" className={classes.link}>
            ContactUs
              </Link>
        </MenuItem>
        <MenuItem>
          <Link href='' color="inherit" className={classes.link}>
           SignUp
              </Link>
        </MenuItem>
        <MenuItem>
          <Link href='' color="inherit" className={classes.link}>
         Login
              </Link>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
       
          <Toolbar>
            <img className={classes.Logo} src='./logo.jpeg' /> 
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography component="p">
                <Link href='' color="inherit" className={classes.link}>
                 Welcom
              </Link>
              </Typography>
              <Typography component="p">
                <Link href='' color="inherit" className={classes.link}>
                Tools
              </Link>
              </Typography>
              <Typography component="p">
                <Link href='' color="inherit" className={classes.link}>
                 AboutUS
              </Link>
              </Typography>
              <Typography component="p">
                <Link href='' color="inherit" className={classes.link}>
                  ContactUs
              </Link>
              </Typography>
              <Typography component="p">
                <Link href='' color="inherit" className={classes.link}>
                SignUp
              </Link>
              </Typography>
              <Typography component="p">
                <Link href='' color="inherit" className={classes.link}>
                  Login
              </Link>
              </Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
