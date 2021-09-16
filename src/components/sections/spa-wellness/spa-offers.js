import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const SpaWellnessRecommendations = (props) => {
  
  return (
    <div className="spa-recommendations-wrapper">
      <div className="container">
        <h2 className="section-heading text-muted">{props.title}</h2>
        {/* <div className="container-fluid"> */}
        <div className="row">
          {
            props.data?.slice(2,5).map((x, i) => (
              <div className="col-12 col-md-4 no-gutters px-2">
                {console.log(x)}
                <a href={x.route} className="grid-item grid-img">
                  <div className="spa-title" style={{ backgroundImage: `url(${x.thumbnail})`, backgroundPosition:'center', backgroundSize:'cover' }}>
                    <h4>{x.post_name}</h4>
                    <div className="slide-hover-overlay"></div>
                  </div>
                </a>
              </div>
            ))
          }
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(SpaWellnessRecommendations);