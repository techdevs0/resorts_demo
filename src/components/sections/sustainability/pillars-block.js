import React from 'react';

const SustainPillarsBlock = (props) => {
  return (
    <div className="pillars-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="pillars-item img-wrapper">
            <img className="img-thumbnail" src={require('./../../../assets/img/sustain/pillars.jpg')} />
          </div>
          <div className="pillars-item">
            <h3 className="ml-sm-4">reduce, reuse, recycle</h3>
            <p className="text-justify ml-sm-4">
            It is encouraged at Fishermans Cove Resort to use recycled products. Strategies including ‘Reuse and Recycle’ of the paper, composting, segregation, Mobile app, ‘Refuse the straw’ have been strictly implemented to ensure the advancement towards a better and sustainable future.
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default SustainPillarsBlock;