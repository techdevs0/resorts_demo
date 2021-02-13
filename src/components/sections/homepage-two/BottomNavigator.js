import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HomeRounded, PhoneRounded, EmailRounded, EventRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const BottomNavigator = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bottom-navigator-wrapper">
            <BottomNavigation showLabels={false} value={value} onChange={handleChange} className={classes.root}>
                <Link to="/"><HomeRounded /></Link>
                <a href={"https://be.synxis.com/?adult=1&arrive=2021-02-07&chain=27304&child=0&currency=EUR&depart=2021-02-08&hotel=31842&level=hotel&locale=en-US&room=SUP&rooms=1"}><EventRounded /></a>
                <a href="tel:+2484677000"><PhoneRounded /></a>
                <a href="mailto:reservations@fishermanscove-resort.com"><EmailRounded /></a>
            </BottomNavigation>
        </div>
    );
}

export default BottomNavigator;