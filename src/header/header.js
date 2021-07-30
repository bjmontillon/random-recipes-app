import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    NavBar: {
        backgroundColor: '#fff8f8',
        width: '100%',
        textAlign: 'center',
        letterSpacing: '3px'
    },
     NavTitle: {
         fontSize: '2rem',
         fontFamily: "'Style Script', cursive"
     },
})


function NavBar() {
    const classes= useStyles();
    return (
        <div className={classes.NavBar}>
            <div className={classes.NavTitle}>Random Recipe</div>
        </div>
    )
}

export default NavBar