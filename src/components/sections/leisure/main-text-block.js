import React from 'react';
import { Link } from 'react-router-dom';
const LeisureTitleBlock = (props) => {
  return (
    <div className="leisure-title-block">
      <div className="container">
        <h2>Leisure Activities</h2>
        <p>
          Recreational facilities are dotted throughout the resort with the stunning infinity pool taking centre stage.
        </p>
        <Link to="/files/experience-guide.pdf" download target="_blank">
            <button className="main-btn btn-filled">Download Experience Guide</button>
        </Link>
        
      </div>
    </div>
  );
}

export default LeisureTitleBlock;