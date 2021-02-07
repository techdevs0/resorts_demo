import React from 'react';

const PrivacyIntroBlock = (props) => {
  return (
    <div className="intro-block">
      <div className="container">
        <h2 className="text-center main-title">{props.data?.section_name}</h2>
        <div className="intro-item">
          {/* <p className="mb-2">
            H Hotels &amp; Resorts and its subsidiaries and affiliated companies (hereinafter referred to as "H Hotels &amp; Resorts" "us" "we" or "our") is committed to respecting your privacy and to complying with applicable data protection and privacy laws. You can visit www.h-hotel.com (the "Site") without disclosing any personally identifiable information about yourself.
          </p>
          <p>
            We have provided this Privacy Policy Statement to help you understand how we collect, use and protect your information when you visit the Site. We wish to help you make informed decisions, so please take a few moments to read the sections below and learn how we may use your personal information. You should read this notice in conjunction with the Terms and Conditions of use for the Site.
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyIntroBlock;