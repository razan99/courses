import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Navbar from '../../components/course/navbar';
import InputField from "./inputs"
import Dropdown from "./select"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './main.css'

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        justifyContent: 'space-between'
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class InstructorRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            country: '',
            city: '',
            university: '',
            discipline: '',
            School: '',
            username: '',
            name: '',
            family_name: '',
            university_no_listed: '',
            school_no_listed: '',
            disciple_no_listed: '',
            university_email: '',
            work_phone: '',
            university_link: ''
            
          
        };
     
    }
   
    onClick = () => {
        console.log('data', this.state);
    }
    onChange = (name) => (value) => {
        this.setState({ [name]: value })
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar  />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    background: '#f4f4f4',
                    width: '48%',
                    marginLeft: '23%',
                    paddingBottom: '36px',
                    paddingLeft: '32px',
                    paddingRight: '52px',
                    marginTop: '5px'
                }} >
                    <Grid container wrap="nowrap" spacing={16}>
                        <Dropdown options=
                            {["Proof", "Dr.", "Mr.", "Ms.", "Ms.."]} title={"Title"} onChange={this.onChange('title')} />
                        <InputField id='username' input='Username' onChange={this.onChange('username')}   />
                       
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <InputField id='name' input='Name' required onChange={this.onChange('name')} />
                        <InputField id='family_name' input='Family Name'required onChange={this.onChange('family_name')} />
                        
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Dropdown options=
                            {["Gaza"]} title={"country"} onChange={this.onChange('country')} />
                        <Dropdown options=
                            {["Gaza"]} title={"city"} onChange={this.onChange('city')} />

                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Dropdown options=
                            {["Gaza", "no-listed"]} title={"university"} onChange={this.onChange('university')} />
                        {this.state.university === 'no-listed' ? <InputField id='university_no_listed' input='Please enter your university' onChange={this.onChange('university_no_listed')} /> : null}
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Dropdown options=
                            {["Gaza", "no-listed"]} title={"school"} onChange={this.onChange('school')} />
                        {this.state.school === 'no-listed' ? <InputField id='school_no_listed' input='Please enter your School/Faculty'required  onChange={this.onChange('school_no_listed')} /> : null}
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Dropdown options=
                            {["Gaza", "no-listed"]} title={"disciple"} onChange={this.onChange('disciple')} />
                        {this.state.disciple === 'no-listed' ? <InputField id='disciple_no_listed' input='Please enter your Disciple' onChange={this.onChange('disciple_no_listed')} /> : null}
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <InputField id='university_email' input='University’s email' onChange={this.onChange('university_email')} />
                        <InputField id='work_phone' input='Work phone'required  onChange={this.onChange('work_phone')} />
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <InputField id='university_link' input='Provide a link to the university’s website to prove employment as faculty' onChange={this.onChange('university_link')} />
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <InputField id='university_email' input='Provide an email of a faculty member at the university  who can testify your faculty position' onChange={this.onChange('university_email')} />
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16} style={{ padding: '8px' }}>
                        <Grid item xs={10}>
                            <Typography component="p" style={{ margin: '47px' }}>
                                Upload university’s Business card
                        </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" className={classes.button} style={{ marginTop: '44px' }}>
                                    Upload
                             </Button>
                            </label>
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Grid item xs={10}>
                            <Typography component="p">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            value="checkedI"
                                        />
                                    }
                                />
                                I agree to the terms and conditions
                        </Typography>
                        </Grid>
                        <Grid item xs={4} margin top={10}>
                        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                           Read
                            </Button>
                            <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            >
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                              domainarli is the profishinal course websitedddddddddddddddddddddddddddddd
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Cancel
                                </Button>
                            </DialogActions>
                            </Dialog>
                            </Grid>
                            </Grid>
    
                    <Button variant="outlined" color="primary" className={classes.button} style={{
                        margin: 'auto',
                        marginTop: '19px'
                    }}
                        onClick={this.onClick}
                    >
                        submit
                    </Button>
                </div>
            </div>
        )
    }
}

InstructorRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructorRegistration);



