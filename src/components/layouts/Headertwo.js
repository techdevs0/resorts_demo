import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import $ from 'jquery';
import {findDOMNode } from 'react-dom'

const navigationmenu = [
  {
      id: 1,
      linkText: 'Home',
      child: true,
      submenu: [
          {
              id: 11,
              link: '/',
              linkText: 'Home 1'
          },
          {
              id: 12,
              new: true,
              link: '/home-two',
              linkText: 'Home 2'
          },
          {
              id: 13,
              link: '/home-three',
              linkText: 'Home 3'
          },
      ]
      
      
  },
  {
    
    id: 2,
    linkText: 'Rooms',
    child: true,
    submenu:[
      {
        id: 21,
        link:'/room-grid',
        linkText:'Room Grid',
      },
      {
        id: 22,
        link:'/room-list',
        linkText:'Room List',
      },
      {
        id: 23,
        link:'/room-details',
        linkText:'Room Details',
      },
    ]
    
},
{
  id: 3,
  linkText: 'News',
  child: true,
  submenu:[
    {
      id: 31,
      link:'/news',
      linkText:'News',
    },
    {
      id: 32,
      link:'/news-details',
      linkText:'News Details',
    },
  ]
  
},
  {
    id: 4,
    link: '/contact',
    linkText: 'Contact',
    child: false,
  }
]


class Headertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
       redText: false
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }
  addClass() {
    this.setState({
      redText:true
    });
  }
  
  removeClass() {
    this.setState({
      redText:false
    });
  }
  removeAll() {
    this.setState({
      redText:false
    });
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: window.innerWidth < 1020
        });
    }, false);
    window.addEventListener('load', () => {
      this.setState({
          isMobile: window.innerWidth < 1020
      });
  }, false);
    window.addEventListener('scroll', () => {
      this.setState({
          isTop: window.scrollY > 150
      });
  }, false);
  }
  navToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).toggleClass('menu-on');
    $(nvb).toggleClass('active');
  }
  removenavToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).removeClass('menu-on');
    $(nvb).removeClass('active');
  }
  getNextSibling = function (elem, selector) {

    // Get the next sibling element
    var sibling = elem.nextElementSibling;
  
    // If there's no selector, return the first sibling
    if (!selector) return sibling;
  
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling
    }
  
  }
  
  triggerChild = (e) => {
    let subMenu = '';
  
    subMenu = ( this.getNextSibling(e.target, '.submenu') !== undefined ) ? this.getNextSibling(e.target, '.submenu') : null;

    if(subMenu !== null && subMenu !== undefined && subMenu !== ''){
      subMenu.classList = subMenu.classList.contains('open') ? 'submenu' : 'submenu open';
    }
  }
  render() {
    const className = this.state.isMobile ? 'breakpoint-on' : '';
    const classNamess = this.state.isMobile ? 'd-none' : '';
    const classNamesss = this.state.isTop ? 'sticky-active' : '';
    
    return (
      <div>
        {/*====== HEADER START ======*/}
        <header className={`header-absolute header-two sticky-header ${classNamesss}`}>
          <div className="container container-custom-one">
            <div className={`nav-container d-flex align-items-center justify-content-between ${className}`}>
              {/* Main Menu */}
              <div className="nav-menu d-lg-flex align-items-center" ref="navmenu">
                {/* Navbar Close Icon */}
                <div className="navbar-close" onClick={this.removenavToggle}>
                  <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                </div>
                {/* Off canvas Menu  */}
                <div className="toggle" onClick={this.addClass}>
                  <Link to="#" id="offCanvasBtn"><i className="fal fa-bars" /></Link>
                </div>
                {/* Mneu Items */}
                <div className="menu-items">
                <ul>
                  {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                      <li key={i} className={` ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                      {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link> }
                          {item.child ?
                              <ul className="submenu" role="menu">
                                  {item.submenu.map((sub_item, i) => (
                                      <li key={i} className={`${sub_item.child ? 'menu-item-has-child' : ''} `}>
                                      {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link> }
                                          {sub_item.third_menu ?
                                              <ul className="submenu">
                                                  {sub_item.third_menu.map((third_item, i) => (
                                                      <li key={i}><Link
                                                          to={third_item.link}>{third_item.linkText}</Link>
                                                      </li>
                                                  ))}
                                              </ul> : null}
                                      </li>
                                  ))}
                              </ul>
                              : null
                          }
                      </li>
                  )) : null}
                  </ul>
                </div>
                {/* from pushed-item */}
                <div className="nav-pushed-item" />
              </div>
              {/* Site Logo */}
              <div className="site-logo">
                <Link to="/" className="main-logo"><img src="assets/img/logo-white.png" alt="" /></Link>
                <Link to="/" className="sticky-logo"><img src="assets/img/logo.png" alt="" /></Link>
              </div>
              {/* Header Info Pussed To Menu Wrap */}
              <div className={`nav-push-item ${classNamess}`}>
                {/* Header Info */}
                <div className="header-info d-lg-flex flex-column align-items-center">
                  <div className="item d-lg-flex align-items-center">
                    <i className="fas fa-phone mr-2 d-inline-block" />
                    <Link to="tel:+90898787709">
                      <h5 className="title">+908 987 877 09</h5>
                    </Link>
                  </div>
                  <div className="item d-lg-flex align-items-center">
                    <i className="fas fa-envelope mr-2 d-inline-block" />
                    <Link to="mailto:info@webmail.com">
                      <h5 className="title">info@webmail.com</h5>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Navbar Toggler */}
              <div className="navbar-toggler" onClick={this.navToggle}  ref="navbtn">
                <span /><span /><span />
              </div>
            </div>
          </div>
        </header>
        {/*====== HEADER END ======*/}
        {/*====== OFF CANVAS START ======*/}
        <div className={classNames("offcanvas-wrapper", {"show-offcanvas":this.state.redText})}>
        <div className={classNames("offcanvas-overly", {"show-overly":this.state.redText})}  onClick={this.removeAll}/>
          <div className="offcanvas-widget">
            <Link to="#" className="offcanvas-close" onClick={this.removeClass}><i className="fal fa-times" /></Link>
            {/* Search Widget */}
            <div className="widget search-widget">
              <h5 className="widget-title">Search room</h5>
              <form action="#">
                <input type="text" placeholder="Search your keyword..." />
                <button type="submit"><i className="far fa-search" /></button>
              </form>
            </div>
            {/* About Widget */}
            <div className="widget about-widget">
              <h5 className="widget-title">About us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis illo ipsa asperiores,
                perspiciatis corrupti veritatis assumenda architecto commodi provident quas necessitatibus
                consequatur praesentium magnam optio deserunt fugiat repellat culpa.
              </p>
            </div>
            {/* Nav Widget */}
            <div className="widget nav-widget">
              <h5 className="widget-title">Our pages</h5>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/menu">Food Menu</Link></li>
                <li><Link to="/restaurant">Restaurant</Link></li>
                <li>
                  <Link to="/places">Places</Link>
                  <ul className="submenu">
                    <li><Link to="/places-details">Places Details</Link></li>
                  </ul>
                </li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/gallery">Our Gallery</Link></li>
              </ul>
            </div>
            {/* Social Link */}
            <div className="widget social-link">
              <h5 className="widget-title">Contact with us</h5>
              <ul>
                <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                <li><Link to="#"><i className="fab fa-google" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/*====== OFF CANVAS END ======*/}
      </div>
    );
  }
}

export default Headertwo;
