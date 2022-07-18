import React from 'react';

const WeddingTitleBlock = (props) => {
  return (
    <div className="wedding-title-block">
      <div className="container">
        <h2 className="text-center">
          {props.intro?.section_name}
        </h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="wedding-title-item">
            <div dangerouslySetInnerHTML={{ __html: props.intro?.section_content }} className="text-justify mr-sm-4 mb-2">

            </div>
          </div>
          <div className="wedding-title-item img-wrapper">
            <img alt="" src={require('./../../../assets/img/banner/wedding.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingTitleBlock;