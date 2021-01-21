import React from 'react';

const OtherRecommendations = (props) => {
  return (
    <div className="dining-recommendations-wrapper">
      <h2 className="section-heading text-muted">{props.title}</h2>
      <div className="container-fluid">
        <div className="row">
          {
            props.data?.map((x, i) => (
              <div className="col-12 col-md-4">
                <div className="grid-item">
                  <div className="dining-title" style={{ backgroundImage: `url(${x.avatar})`, backgroundPosition:'center', backgroundSize:'cover' }}>
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

export default OtherRecommendations;