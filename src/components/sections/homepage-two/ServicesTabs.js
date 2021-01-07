import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';

const tabsData = [
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/leisure.jpg"),
        buttonLink:""
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/book.jpg"),
        buttonLink:""
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/wedding.jpg"),
        buttonLink:""
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/offer.jpg"),
        buttonLink:""
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/spa.jpg"),
        buttonLink:""
    },
    {
        tagLine: "Wedding In Seychelles",
        title: "Plan Your Dream Wedding Today",
        image: require("../../../assets/img/premium-offering/food.jpg"),
        buttonLink:""
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
            <h2 className="text-center main-title text-muted p-2">Premium Offerings</h2>
            <div className={classes.root}>
                <Paper square>
                    <Tabs
                        value={value}
                        variant="scrollable"
                        scrollButtons="on"
                        onChange={handleChange}
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Leisure Activities" {...a11yProps(0)} />
                        <Tab label="Book with us" {...a11yProps(1)} />
                        <Tab label="Weddings" {...a11yProps(2)} />
                        <Tab label="Offers" {...a11yProps(3)} />
                        <Tab label="Spa" {...a11yProps(3)} />
                        <Tab label="Food &amp; Beverages" {...a11yProps(3)} />
                    </Tabs>
                </Paper>
                {
                    tabsData.map((x, i) => (
                        <TabPanel value={value} index={i} className="service-tab-panel">
                            <div className="tab-slider">
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={12} className="px-0 py-0">
                                        <div className="slider-image-wrapper-service">
                                            <img src={x.image} alt={x.title} />
                                            <div className="hotel-title-wrapper">
                                                <h4 className="hotel-tagline my-3">
                                                    {x.tagLine}
                                                </h4>
                                                <h1 className="hotel-title display-4 my-4">
                                                    {x.title}
                                                </h1>
                                                <button className="main-btn btn-filled mt-4">KNOW MORE</button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </TabPanel>
                    ))
                }
            </div>
        </div>
    );
}

export default ServiceTabs;