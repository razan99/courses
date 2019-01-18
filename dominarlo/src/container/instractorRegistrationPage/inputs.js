import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    }
});


class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    handleChange = (event) => {
        this.props.onChange(event.target.value)
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor={this.props.id}>{this.props.input}</InputLabel>
                    <Input
                        id={this.props.id}
                        name={this.props.id}
                        onChange={this.handleChange}
                    />
                </FormControl>
            </Grid>
        )
    }
}

InputField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputField);