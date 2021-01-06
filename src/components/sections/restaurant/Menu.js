import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

import menuimg1 from '../../../assets/img/menu/01.jpg';
import menuimg2 from '../../../assets/img/menu/02.jpg';
import menuimg3 from '../../../assets/img/menu/03.jpg';
import menuimg4 from '../../../assets/img/menu/04.jpg';
import menuimg5 from '../../../assets/img/menu/05.jpg';
import menuimg6 from '../../../assets/img/menu/06.jpg';
import menuimg7 from '../../../assets/img/menu/07.jpg';
import menuimg8 from '../../../assets/img/menu/08.jpg';
import menuimg9 from '../../../assets/img/menu/09.jpg';
import menuimg10 from '../../../assets/img/menu/10.jpg';

const menuPosts1 = [
  {
      menuanimation: '.3s',
      photo: menuimg1,
      url:'#',
      title:'Eggs & Bacon',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.4s',
      photo: menuimg2,
      url:'#',
      title:'Tea or Coffee',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.5s',
      photo: menuimg3,
      url:'#',
      title:'Chia Oatmeal',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.6s',
      photo: menuimg4,
      url:'#',
      title:'Juice',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.7s',
      photo: menuimg5,
      url:'#',
      title:'Chia Oatmeal',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
];
const menuPosts2 = [
  {
      menuanimation: '.3s',
      photo: menuimg6,
      url:'#',
      title:'Fruit Parfait',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.4s',
      photo: menuimg7,
      url:'#',
      title:'Marmalade Selection',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.5s',
      photo: menuimg8,
      url:'#',
      title:'Cheese Platen',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.6s',
      photo: menuimg9,
      url:'#',
      title:'Avocado Toast',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
  {
      menuanimation: '.7s',
      photo: menuimg10,
      url:'#',
      title:'Avocado Toast',
      desc:'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.'
  },
];

class Menu extends Component {
  render() {
    return (
    <section className="menu-area gradient-white pt-115 pb-115">
    <div className="container">
      {/* Section Title */}
      <div className="section-title text-center mb-80">
        <span className="title-tag">available</span>
        <h2>Treanding Menu</h2>
      </div>
      {/* Menu Looop */}
      <div className="menu-loop">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            {menuPosts1.map((item, i) => (
              <ReactWOW key={i} animation="fadeInUp" data-wow-delay={item.menuanimation}>
              <div className="single-menu-box">
                <div className="menu-img" style={{backgroundImage: "url("+ item.photo + ")"}}>
                </div>
                <div className="menu-desc">
                  <h4><Link to={item.url}>{item.title}</Link></h4>
                  <p>{item.desc}
                  </p>
                  <Link to={item.url} className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                </div>
              </div>
              </ReactWOW>
            ))}
          </div>
          <div className="col-lg-6 col-md-10">
          {menuPosts2.map((item, i) => (
              <ReactWOW key={i} animation="fadeInUp" data-wow-delay={item.menuanimation}>
              <div className="single-menu-box">
                <div className="menu-img" style={{backgroundImage: "url("+ item.photo + ")"}}>
                </div>
                <div className="menu-desc">
                  <h4><Link to={item.url}>{item.title}</Link></h4>
                  <p>{item.desc}
                  </p>
                  <Link to={item.url} className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                </div>
              </div>
              </ReactWOW>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
    );
  }
}

export default Menu;
