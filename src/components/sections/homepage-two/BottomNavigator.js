import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
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
                <a href={"https://be.synxis.com/?_ga=2.102065793.1000121752.1606552834-1702853238.1606552834&adult=1&arrive=2020-11-28&chain=27304&child=0&currency=AED&depart=2020-11-29&hotel=75043&level=hotel&locale=en-US&promo=HSPA&rooms=1"}><EventRounded /></a>
                <a href="tel:+2484677000"><PhoneRounded /></a>
                <a href="mailto:reservations@fishermanscove-resort.com"><EmailRounded /></a>
            </BottomNavigation>
        </div>
    );
}

export default BottomNavigator;