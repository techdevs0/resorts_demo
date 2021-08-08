import React from 'react';

const SeychellesIntroBlock = (props) => {
  return (
    <div className="intro-block pb-4">
      <div className="container">
        <h2 className="text-center main-title">About Seychelles</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="intro-item">
            <h3 className=" mr-sm-4">
              {/*Call of the Paradise*/}
              {props.data?.section_name}
            </h3>
            <div className="text-justify mr-sm-4" dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>

            </div>
          </div>
          <div className="intro-item img-wrapper">
            <img alt="" src={props.data?.section_avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeychellesIntroBlock;