import React from 'react';
import { withRouter } from 'react-router-dom';

const OtherRecommendations = (props) => {
  return (
    <div className="rooms-recommendations-wrapper">
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className="container-fluid">
        <div className="row">
          {
            props.data?.slice(props.data.length - 3,props.data.length).map((x, i) => (
              <div className="col-12 col-md-4 no-gutters px-2">
                <div className="grid-item" onClick={()=> props.history.push('/rooms-inner/'+x.id)}>
                  <div className="rooms-title" style={{ backgroundImage: `url(${x.thumbnail})`, backgroundPosition:'center', backgroundSize:'cover' }}>
                    <h4>{x.post_name}</h4>
                    <div className="slide-hover-overlay"></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(OtherRecommendations);