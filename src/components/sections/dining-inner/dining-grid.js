import React from 'react';

const DiningInnerInfo = (props) => {
  return (
    
    <div className='dining-info-wrapper'>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              {/* <div className="image-wrapper">
                <img src={require('./../../../assets/img/travellers-choice.png')} alt="" />
              </div> */}
              <p className="info-title">Dress Code {console.log(props.dress_code)}</p>
              <div dangerouslySetInnerHTML={{ __html: props.dress_code }}>

              </div>
              {/* <p className="text-muted">Daily: <br /> 7pm - 11pm</p>
              <p className="text-muted font-italic">*Advance dinner reservations required</p> */}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              {/* <div className="image-wrapper">
                <img src={require('./../../../assets/img/travellers-choice.png')} alt="" />
              </div> */}
              <p className="info-title">Opening Hours</p>
              <div dangerouslySetInnerHTML={{ __html: props.opening_hours }}>

              </div>              
              {/* <p className="text-muted">Daily: <br /> Smart or elegant casuals, resort chick or appropriate footwear.</p>
              <p className="text-muted font-italic">No beachwear, sleeveless shirts or flipflops.</p> */}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="menu-buttons">
              <button className="main-btn btn-filled">Download our Menu</button>
              <button className="main-btn btn-filled">Download Beverage Menu</button>
              <button className="main-btn btn-filled">Download wine list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningInnerInfo;