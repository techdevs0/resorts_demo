import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const tabsData = [
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/leisure.jpg"),
        buttonLink: "/whats-on"
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/book.jpg"),
        buttonLink: "room-suites"
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/wedding.jpg"),
        buttonLink: "/weddings"
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/offer.jpg"),
        buttonLink: "/offers"
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/spa.jpg"),
        buttonLink: "/spa-wellness"
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/food.jpg"),
        buttonLink: "/dining"
    },
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        // boxShadow: '0 0 8px #dadada'
    },
}));

const ServiceTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="service-tabs-wrapper">
            <h2 className="text-center section-heading text-muted">Premium Offerings</h2>
            <div className={classes.root}>
                <Paper square elevation={0}>
                    <Tabs
                        value={value}
                        variant="scrollable"
                        scrollButtons="on"
                        onChange={handleChange}
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            props.data?.map((x, i) => (
                                <Tab label={x.post_name} {...a11yProps(i)} />
                            ))
                        }
                    </Tabs>
                </Paper>
                {
                    props.data?.map((x, i) => (
                        <TabPanel value={value} index={i} className="service-tab-panel">
                            <i className="fa fa-arrow-left service-left" onClick={()=> value > 0 ? setValue(value - 1) : setValue(props.data.length - 1)} />
                            <div className="tab-slider">
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={12} className="px-0 py-0">
                                        <div className="slider-image-wrapper-service">
                                            <img src={x.thumbnail} alt={x.title} />
                                            <div className="hotel-title-wrapper">
                                                <h4 className="hotel-tagline my-3">
                                                    {x.post_name}
                                                </h4>
                                                <h1 className="hotel-title my-4">
                                                    {x.short_description}
                                                </h1>
                                                <Link to={x.buttonLink}>
                                                    <button className="main-btn btn-filled mt-4">KNOW MORE</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <i className="fa fa-arrow-right service-right" onClick={()=> value + 1 < props.data?.length ? setValue(value + 1) : setValue(0) }  />
                        </TabPanel>
                    ))
                }
            </div>
        </div>
    );
}

export default ServiceTabs;