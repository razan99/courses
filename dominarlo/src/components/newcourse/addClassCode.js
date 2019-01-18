import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from "../../container/instractorRegistrationPage/inputs"

export default class AddClassCode extends React.Component {
    handleChange = (name) => (value) => {
        this.props.onChange({ id: this.props.id, name, value })
    }
    render() {
        return (
            <Grid container spacing={24}>
                <InputField id='class_code' input='className code' onChange={this.handleChange('class_code')} />
                <InputField id='class_name' input='className name' onChange={this.handleChange('class_name')} />
            </Grid>
        )
    }
}