import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  HomeRounded,
  PhoneRounded,
  EmailRounded,
  EventRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const BottomNavigator = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-navigator-wrapper">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <Link className="main-btn btn-border" to={"#"}
              style={{borderColor: "#be8a7d",
                background: "#be8a7d",
                color:"white"
              }}
        >Book Now</Link>
        {/*<Link to="/">*/}
        {/*  <HomeRounded />*/}
        {/*</Link>*/}
        {/*<a href="#">*/}
        {/*  <EventRounded*/}
        {/*    onClick={(e) => {*/}
        {/*      e.preventDefault();*/}
        {/*      window.gtag_report_conversion(*/}
        {/*          "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"*/}
        {/*      )*/}
        {/*    }*/}
        {/*    }*/}
        {/*  />*/}
        {/*</a>*/}
        <a href="tel:+2484677000">
          <PhoneRounded />
        </a>
        <a href="mailto:reservations@fishermanscove-resort.com">
          <EmailRounded />
        </a>
      </BottomNavigation>
    </div>
  );
};

export default BottomNavigator;
