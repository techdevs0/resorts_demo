import React from 'react';

const SeychellesIntroBlock = (props) => {
  return (
    <div className="intro-block pb-4">
      <div className="container">
        <h2 className="text-center main-title">About Seychelles</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="intro-item">
            <h3 className=" mr-sm-4">Call of the Paradise</h3>
            
            <p className="text-justify mr-sm-4">
            Seychelles is a blend of 115 coralline and granitic islands situated between 4 and 10 degrees south of equator and a thousand miles away from the east coast of Africa. It is known as the island paradise and is full of sandy beaches and pristine oceans, and lush green forests. The island nation is famed especially for honeymoon travels and it is no less than a heavenly kingdom for travelers seeking adventure. It is full of unspoiled and surreal locations including forests, beaches, and plains. It also houses a number of rare animal and plant species.</p>
          </div>
          <div className="intro-item img-wrapper">
            <img src={require('./../../../assets/img/banner/home.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeychellesIntroBlock;