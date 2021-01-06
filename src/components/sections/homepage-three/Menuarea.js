import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import SRLWrapper from "simple-react-lightbox";

import dishimg1 from '../../../assets/img/menu/menu-gallery-1.jpg';
import dishimg2 from '../../../assets/img/menu/menu-gallery-2.jpg';
import dishimg3 from '../../../assets/img/menu/menu-gallery-3.jpg';

const dishPosts = [
  {
      photo: dishimg1,
  },
  {
      photo: dishimg2,
  },
  {
      photo: dishimg3,
  },
  {
      photo: dishimg1,
  },
  {
      photo: dishimg2,
  },
  {
      photo: dishimg3,
  },
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-arrow-right"></i></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-arrow-left"></i></div>
  );
}

class Menuarea extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
				slidesToScroll: 1,
				fade: false,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 4000,
				arrows: false,
				dots: false,
				nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,	
    }; 
    const gallerysettings = {
      slidesToShow: 3,
				slidesToScroll: 1,
				fade: false,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 4000,
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
						},
					},
				],
    }; 
    
    return (
        <section className="menu-area bg-white menu-with-shape menu-nagative-gallery">
        <div className="container">
          {/* section title */}
          <div className="row align-items-center">
            <div className="col-md-8 col-sm-8">
              <div className="section-title">
                <span className="title-tag">Menu</span>
                <h2>Our Foods Menu</h2>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 d-none d-sm-block">
              <div className="menu-slider-arrow arrow-style text-right">
              <SamplePrevArrow />
              <SampleNextArrow />
              </div>
            </div>
          </div>
          {/* Menu Slider */}
          <Slider className="menu-slider mt-80 menu-loop" {...settings}>
            <div className="single-slider">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/01.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Eggs &amp; Bacon</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/02.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Tea or Coffee</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/03.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Chia Oatmeal</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/06.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Fruit Parfait</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/07.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Marmalade Selection</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/08.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Cheese Platen</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slider">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/04.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Juice</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/05.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Chia Oatmeal</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/09.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Avocado Toast</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                  <div className="single-menu-box hover-drak">
                    <div className="menu-img" style={{backgroundImage: 'url(assets/img/menu/10.jpg)'}}>
                    </div>
                    <div className="menu-desc">
                      <h4><Link to="#">Avocado Toast</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.
                      </p>
                      <Link to="#" className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* Gallery */}
        <div className="gallery-wrap">
          <div className="container">
          <SRLWrapper>
            <Slider className="row gallery-slider text-center" {...gallerysettings}>
            {dishPosts.map((item, i) => (
              <div key={i} className="col-lg-12">
                <a href={item.photo} className="gallery-popup" data-attribute="SRL">
                  <img src={item.photo} alt="" />
                </a>
              </div>
            ))}
            </Slider>
            </SRLWrapper>
          </div>
        </div>
        {/* Shape */}
        <div className="shape-one">
          <img src="assets/img/icon/05.png" alt="" />
        </div>
        <div className="shape-two">
          <img src="assets/img/icon/06.png" alt="" />
        </div>
      </section>
      
    );
  }
}

export default Menuarea;
