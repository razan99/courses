import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    rootNavbar: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        marginLeft: 12,
        display: 'block'
    },
    Logo:{
        desplay:'flex',
    
      },
});

function Navbar(props) {
    const { classes } = props;
    return (
        <div className={classes.rootNavbar}>
            <AppBar position="static">
                <Toolbar>
                <img className={classes.Logo} src='./logo.jpeg' /> 
                    <Typography className={classes.title} variant="h6" color="inherit" >
                    </Typography>
                    <div className={classes.grow} />
                    <IconButton color="inherit" calssName="removed">
                        <span style={{ paddingRight: ' 6px', fontSize: '17px' }}> adel ibrahem</span>
                        <AccountCircle />
                    </IconButton>
                    <IconButton color="inherit" calssName="removed">
                        <span style={{ paddingRight: ' 6px', fontSize: '17px' }}> Logout </span>
                        <ExitToApp />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div >
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);