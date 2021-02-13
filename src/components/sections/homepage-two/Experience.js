import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactWOW from 'react-wow'


const data = [
    {
        image: require('../../../assets/img/experience/sustaniablity.webp'),
        title: "Sustainability",
        link:'/sustainability'
    },
    {
        image: require('../../../assets/img/experience/overview.webp'),
        title: "Overview of the Resort",
        link:'/about'
    },
    {
        image: require('../../../assets/img/experience/seychelles-min.webp'),
        title: "About Seychelles",
        link:'/about-seychelles'
    },
    {
        image: require('../../../assets/img/experience/contact.jpg'),
        title: "Contact \n Us",
        link:'/contact'
    },
]

class Experience extends Component {
    render() {
        return (
            <section className="experience-wrapper">
                <h2 className="section-heading text-muted">Unlock the ultimate experience with us today</h2>
                <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
                    <div className="d-flex flex-row flex-wrap flex-sm-nowrap">
                        {
                            data.map(x => (
                                <div className="experience-item" onClick={()=> this.props.history.push(x.link)}>
                                    <div className="background">
                                        <img className="img-fluid w-100 h-100" src={x.image} alt="" />
                                    </div>
                                    <div className="foreground">
                                        <h3>
                                            {x.title}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </ReactWOW>
            </section>

        );
    }
}

export default withRouter(Experience);
