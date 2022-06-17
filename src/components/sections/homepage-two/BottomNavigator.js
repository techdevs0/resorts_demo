import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { constants } from '../../../utils/constants';

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

const BottomNavigator = ({ activeLang }) => {

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
          style={{
            borderColor: "#be8a7d",
            background: "#be8a7d",
            color: "white"
          }}
          onClick={(e) =>

            window.gtag_report_conversion(`${activeLang === "en" ? 'https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB'
              : activeLang === "fr" ? 'https://be.synxis.com/?Hotel=31842&Chain=27304&locale=fr-FR'
                : activeLang === "de" ? 'https://be.synxis.com/?Hotel=31842&Chain=27304&locale=de-DE'
                  : 'https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB'
              }`)
          }
        >
          {
            activeLang === "en" ? "Book Now"
              : activeLang === "fr" ? "Réserver"
                : activeLang === "de" ? "JETZT BUCHEN"
                  : "Book Now"
          }
          {/* {constants?.site_content?.home_page?.banner?.btn3[activeLang]} */}
        </Link>
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
