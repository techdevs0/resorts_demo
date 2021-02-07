import React from 'react';

const CovidIntroBlock = (props) => {
  return (
    <div className="intro-block">
      <div className="container">
        <h2 className="text-center main-title">{props.data?.section_name}</h2>
        <div className="intro-item">
          {/* <p className="mb-2">
            At The Fishermans Cove Resort, the health and safety of our guests and employees is our highest priority. We understand the concern you may be experiencing surrounding the coronavirus (COVID 19).
          </p>
          <p>
            We are closely monitoring global developments and recommendations and have put all precautions in place.

            We will continue to update this page with the latest information on our health and sanitation measures and information regarding booking flexibility at The Fishermans Cove Resort.
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidIntroBlock;