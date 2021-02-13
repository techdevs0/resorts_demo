import React from 'react';
import { Link } from 'react-router-dom';

const OffersInnerMainBlock = (props) => {
  return (
    <div className="main-block">
      <div className="container">
        <h2>Spa for Two</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="main-item img-wrapper">
            <img alt="" src={require('./../../../assets/img/offers/inner.jpg')} />
          </div>
          <div className="main-item pl-sm-4">
            <p className="text-justify ">
              Embark on a romantic journey of tranquillity with your partner at the award-winning Sesel Spa
            </p>
            <p className="text-justify ">
              Enjoy memorable moments of spa bonding with a 60’ deep relaxing massage treatment in our scenic Couples Suite, followed by an hour’s calming moment in our private garden with views of Seychelles’ beautiful mountains whilst sipping on some bubbly and enjoying delicious appetizers lovingly prepared by our Chef.
            </p>
            <h6 className="mv">All for AED 4000/- only
            <br />
              <small>Terms &amp; Conditions applied.</small>
            </h6>
            <div className="share-block">
              <p>Share with friends and family</p>
              <div className="share-social-links">
                <a href="https://www.facebook.com/fishermanscoveresort/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/fisherman_cove"><i className="fab fa-twitter"></i></a>
                <a href="https://wa.me/2482816329"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/fishermanscove.resort/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="reservations-block">
              <p>For Reservations</p>
              <div className="contact-links">
                <div>
                  <i className="fas fa-phone pr-2"></i>
                  <span>+248 467 7000</span>
                </div>
                <div className="pl-md-4">
                  <i className="fas fa-envelope pr-2"></i>
                  <span>reservations@fishermanscove-resort.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="back-to text-center mt-4">
          <Link to="/offers" className="btn btn-eden main-btn mx-auto d-inline-block">
            Back to all offers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OffersInnerMainBlock;