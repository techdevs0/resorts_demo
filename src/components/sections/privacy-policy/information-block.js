import React from 'react';

const PrivacyInformationBlock = (props) => {
  return (
    <div className="information-block">
      <div className="container">
        <div className="information-item">
          <h5>My Information</h5>
          <p className="mb-2">
            What kind of information is collected? Anonymous Information – Anonymous information cannot be tied directly to personally identifiable information. We use this information to improve our site. This information helps us focus our resources on the features that are most popular with our guests. We may collect information regarding your IP address, browser type, domain name and access time. This information is used for our own research purposes and is separate from any personally identifiable information that you may submit via this site. We do not pnk IP addresses to any personal information. In rare instances, IP addresses may be used to assist in deterring and/or preventing abusive or criminal activity on the website.
          </p>
          <p>
            Personally Identifiable Information -The following forms on www.h-hotel.com collect personally identifiable information: Newsletter subscription form – Information in this form will be used to send H Hotels &amp; Resorts periodic newsletter updating guests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyInformationBlock;