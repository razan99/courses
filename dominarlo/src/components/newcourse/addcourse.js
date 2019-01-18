import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddClassCode from './addClassCode'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ReactJson from 'react-json-view'
import InputField from "../../container/instractorRegistrationPage/inputs"
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 80
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    justifyContent: 'space-between'
  },
  button: {
    position: 'absolute',
    top: 81
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
});

class Addnewcourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_class: [{ id: 1 }],
      university_course_name: '',
      university_course_code: '',
    }
  }
  addClass = (e) => {
    e.preventDefault()
    var arr = this.state.course_class
    var lastValue = (arr[arr.length - 1].id)++
    arr.unshift({ id: lastValue, class_name: '', class_code: '' })
    this.setState({ course_class: arr })
  }
  onChange = (name) => (value) => {
    this.setState({ [name]: value })
  }
  handleChange = (course_class) => {
    console.log({ course_class });

    let newState = [{ id: 1 }]
    newState[0].class_code = '';
    newState[0].class_name = '';
    this.setState({ course_class: newState })
    console.log(this.state.course_class, 'this.state.course_class');

    let new_course_class = {}
    new_course_class.id = course_class.id
    if (course_class.name === 'class_name') {
      new_course_class.class_name = course_class.value;
      new_course_class.class_code = '';
    } else if (course_class.name === 'class_name') {
      new_course_class.class_name = '';
      new_course_class.class_code = course_class.value;
    }
    console.log(new_course_class);

    let new_class = this.state.course_class
    new_class[course_class.id - 1] = new_course_class
    this.setState({ course_class: new_class })
  }
  onClick = () => {
    console.log(this.state);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <Typography component="p" style={{
                marginLeft: ' 140px',
                fontSize: ' 19px'
              }}>
                Creating a course / class
            </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" component="span" className={classes.button}>
                <Link to="/course">Back to my courses </Link>
              </Button>
            </Grid>
          </Grid>
        </Paper>
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
            <InputField id='university_course_code' input='Universitye s Course Code' onChange={this.onChange('university_course_code')} />
          </Grid>
          <Grid container wrap="nowrap" spacing={16}>
            <InputField id='university_course_name' input='Universitye s Course name' onChange={this.onChange('university_course_name')} />
          </Grid>
          {
            this.state.course_class.map((element) => {
              return <AddClassCode key={element.id} id={element.id} className={classes.margin} onChange={this.handleChange} />
            })
          }
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item xs={10}>
              <Fab variant="extended" aria-label="Delete" className={classes.fab} onClick={this.onClick}>
                submit
              </Fab>
            </Grid>
            <Grid item xs={2}>
              <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.addClass} style={{
                width: '40px',
                height: '40px'
              }}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </div>
        <ReactJson src={this.state.course_class} />

      </div>
    )
  }
}

Addnewcourse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Addnewcourse);
