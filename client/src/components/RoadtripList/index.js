import React from 'react';
import { Link } from 'react-router-dom';

// imports from Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const RoadtripList = ({ user }) => {

    const roadtrips = user.roadtrips;

    const classes = useStyles();

    if (!roadtrips || !roadtrips.length) {
        return (
            <h3>No Roadtrips Yet!</h3>
        )
    }

    return (
        <div>
            <>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Box className='roadtripList'>

                        <div className={classes.root}>
                            <div>
                                {roadtrips.map(trip => (
                                    <h2>
                                        {trip.name}
                                    </h2>
                                ))}
                            </div>
                        </div>
                    </Box>
                </Grid>
            </>
        </div>
    )
};

export default RoadtripList;