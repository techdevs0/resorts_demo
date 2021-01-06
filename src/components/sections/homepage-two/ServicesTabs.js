import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';

const sliderImages = [
    {
        image: require("../../../assets/img/banner/06.jpg"),
        title: "Seyshima"
    },
    {
        image: require("../../../assets/img/banner/06.jpg"),
        title: "Eden"
    },
    {
        image: require("../../../assets/img/banner/06.jpg"),
        title: "Trader Vic's"
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
            <h2 className="text-center main-title text-muted p-2 mt-2">Premium Offerings</h2>
            <div className={classes.root}>
                <Paper square>
                    <Tabs
                        value={value}
                        variant="scrollable"
                        scrollButtons="on"
                        centered
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
                <TabPanel value={value} index={0}>
                    <div className="tab-slider">
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} className="p-0">
                                <div className="slider-image-wrapper-service">
                                    <img src={sliderImages[0].image} />
                                    <div className="hotel-title-wrapper">
                                        <h4 className="hotel-tagline my-3">Wedding In Seychelles</h4>
                                        <h1 className="hotel-title display-3">Plan Your Dream Wedding Today</h1>
                                        <button className="main-btn btn-filled">KNOW MORE</button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="tab-slider">
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} className="p-4">
                                <Carousel
                                    dynamicHeight={false}
                                    showStatus={false}
                                    showArrows={false}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    autoPlay={false}
                                >
                                    {
                                        sliderImages.map(x => (
                                            <div>
                                                <img src={x.image} />
                                                <p className="hotel-title">{x.title}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </Grid>
                            <Grid item xs={12} sm={6} className="p-4">
                                <div className="tab-content px-5">
                                    <h1>Spa &amp; Wellness</h1>
                                    <ul>
                                        <li>Sesel Spa - Named as a tribute to its destination (Sesel is the Creole name for Seychelles), this award-winning spa offers a selection of signature treatments that infuse the best of Western and Eastern techniques for a holistic approach to wellness.</li>
                                    </ul>
                                    <button className="btn-theme btn-explore" onClick={() => window.location = "https://www.hhoteldubai.com/spa-and-fitness/"}>EXPLORE</button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="tab-slider">
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} className="p-4">
                                <Carousel
                                    dynamicHeight={false}
                                    showStatus={false}
                                    showArrows={false}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    autoPlay={false}
                                >
                                    {
                                        sliderImages.map(x => (
                                            <div>
                                                <img src={x.image} />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </Grid>
                            <Grid item xs={12} sm={6} className="p-4">
                                <div className="tab-content px-5">
                                    <h1>White Sand Beach</h1>
                                    <ul>
                                        <li>H Resort Beau Vallon Beach has a 3km of white sand beach and turquoise water</li>
                                        <li>The only swimmable beach in Mahe all year round</li>
                                        <li>The boutique resort boasts a natural reef within 50m of swimming directly from the beach</li>
                                    </ul>
                                    <button className="btn-theme btn-explore">EXPLORE</button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="tab-slider">
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} className="p-4">
                                <Carousel
                                    dynamicHeight={false}
                                    showStatus={false}
                                    showArrows={false}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    autoPlay={false}
                                >
                                    {
                                        sliderImages.map(x => (
                                            <div>
                                                <img src={x.image} />
                                                <p className="hotel-title"></p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </Grid>
                            <Grid item xs={12} sm={6} className="p-4">
                                <div className="tab-content px-5">
                                    <h1>Sites</h1>
                                    <ul>
                                        <li>Market St - 4.3 km 11 min drive </li>
                                        <li>Botanical Gardens - 5.9km – 14 min drive </li>
                                        <li>Arul Mihu Navasakthi Vinayagar Temple - 4.2km – 9min drive </li>
                                        <li>Cathedral of our Lady of Immaculate Conception - 4.4km – 10min drive </li>
                                        <li>National Museum of History - 5.8km – 13 min drive </li>
                                        <li>Island Hopping </li>
                                    </ul>
                                    <button className="btn-theme btn-explore">EXPLORE</button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}

export default ServiceTabs;