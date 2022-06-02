import React from 'react';
import { constants } from '../../../utils/constants';
const LeisureAwards = (props) => {
  return (
    <div className="leisure-awards-wrapper">
      <div className="container">
        <h2 className="section-heading">
          {constants?.site_content?.leisure_page?.award_sec?.title[props?.activeLang]}
        </h2>
        <div className="row justify-content-center">
          {
            Object.entries(props.award)?.map(([key, x]) => (
              <div className="col-6 col-md-3">
                <div className="award-image-wrapper">
                  <img src={x.section_avatar?.avatar} alt="sustain" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default LeisureAwards;