import Navbar from '../../components/course/navbar';
import CoursesSection from '../../components/course/course-sction'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Dropdown from '../instractorRegistrationPage/select'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './main.css'
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 10
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
});
class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discipline: '',
      course: [{
        id: 1,
        title: 'Accounting',
        courseTitle: 'Principle Of Accounting'
      },
      {
        id: 2,
        title: 'Accounting',
        courseTitle: 'Managment Accounting'
      },
      {
        id: 4,
        title: 'Finance',
        courseTitle: 'Managment Accounting'
      },
      {
        id: 5,
        title: 'Finance',
        courseTitle: 'Intermediate AccouningI'
      },
      {
        id: 6,
        title: 'Finance',
        courseTitle: 'Managment Accounting'
      },
      {
        id: 7,
        title: 'Finance',
        courseTitle: 'Intermediate AccouningI'
      },
      {
        id: 8,
        title: 'Accounting',
        courseTitle: 'Principle Of Accounting'
      },
      ],
      filterd: [],
    }

  }
  onChange = (name) => (value) => {
    this.setState({ [name]: value })
  }
  renderSection() {
    let filterd = this.state.course;
    if (!!this.state.discipline) {
      filterd = this.state.course.filter((item) => {
        return this.state.discipline === item.title
      })
    }
    return <CoursesSection filterd={filterd} />
  }
  render() {
    const { classes } = this.props;

    return (
      <div style={{ background: '#f4f4f4', width: '100%', height: '100vh' }}>
        <Navbar />
        <Paper className={classes.root} elevation={1} style={{ marginTop: '2px' }}>
          <Grid container spacing={24} style={{ margin: '0' }}>
            <Grid item xs={8}>
              <FormControl variant="outlined" className={classes.formControl} style={{
                marginLeft: ' 140px',
              }}>
                <Dropdown options=
                  {["Accounting", "Finance", "Statistics", "Markiting", "Businisse"]}
                  title={"Please choose a discipline"}
                  onChange={this.onChange('discipline')} style={{
                        width: '251px'
                    }}/>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" component="span" className={classes.button} style={{ top: ' 98px' }}>
                Back to my courses
              </Button>
            </Grid>
          </Grid>
        </Paper>
        {this.renderSection()}
      </div >
    )
  }
};

Course.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course);