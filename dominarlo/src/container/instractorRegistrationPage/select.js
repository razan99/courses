import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        justifyContent: 'space-between'
    },
    margin: {
        margin: theme.spacing.unit,
    },
});
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            labelWidth: 0,
        }
    }
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event.target.value);
    }
    render() {
        const { classes } = this.props;

        return (
            <Grid item xs>
                <FormControl fullWidth className={classes.margin} style={this.props.style}>
                    <InputLabel htmlFor='select'>{this.props.title}</InputLabel>
                    <Select
                        value={this.state.value}
                        onChange={this.onChange}
                        inputProps={{
                            name: 'value',
                            id: 'select',
                        }}
                        className={classes.select}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {this.props.options.map(option => {
                            return <MenuItem value={option} key={option} >{option}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
        )
    }
};

Dropdown.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dropdown);