import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30
    },
    paper: {
        background: '#f7f7f7',
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
        width: 271,
        height: 100

    },
    
    cont: {
        marginLeft: 57,
        marginTop: 60
    },
    card: {
        maxWidth: 345,
        marginBottom: 2
    },
});
class CoursesSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} >
                <Grid container className={classes.demo} justify="center" coler="#fff">
                    <Grid item xs={12}>
                        <Typography variant="h5" style={{ textAlign: 'center' }}>
                            Please choose a course
                        </Typography>
                    </Grid>
                    <Grid container justify="center" className={classes.cont}   >

                        {this.props.filterd.map(value => (
                            <Grid key={value.id} item xs={4} >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6">
                                                {value.courseTitle}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

CoursesSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoursesSection);













