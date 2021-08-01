import React from 'react';
import { withRouter } from 'react-router-dom';

const RoomGridItem = (props) => {
  return (
    // {console.log(props)};
    <div className="room-grid-item-wrapper" >
      <div className="grid-item">
        <div className="room-title" onClick={()=>props.history.push('/rooms-inner/'+props.link)}  style={{ backgroundImage: `url(${props.image})`, backgroundPosition:'center', backgroundSize:'cover' }}>
          <h3>{props.title}</h3>
          <a href={props.link}>{props.linkText}</a>
          <div className="slide-hover-overlay"></div>
        </div>
        <div className="room-description">
          <p dangerouslySetInnerHTML={{__html:props.description}}></p>
          <button
            className="main-btn btn-filled"
            onClick={(e) => {
                e.preventDefault();
                window.gtag_report_conversion(props.url,true)
            }
            }
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RoomGridItem);