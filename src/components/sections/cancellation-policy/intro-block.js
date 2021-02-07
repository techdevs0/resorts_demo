import React from 'react';

const CancellationIntroBlock = (props) => {
  return (
    <div className="intro-block">
      <div className="container">
        <h2 className="text-center main-title">{props.data?.section_name}</h2>
        <div className="intro-item">
          {/* <p className="mb-2">
            The H Resort operates a fair and flexible cancellation policy that varies from room code and type.
            <br />
            For more information about the cancellation policy, please refer to the ‘Book Now Section’.
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CancellationIntroBlock;