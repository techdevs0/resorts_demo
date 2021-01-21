import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import $ from 'jquery';
import { findDOMNode } from 'react-dom'
import API from '../../utils/http';
import { LiveTvTwoTone } from '@material-ui/icons';

let navigationmenu = [
  {
    id: 1,
    linkText: 'About Us',
    child: false,
    link: "/about",
  },
  {

    id: 2,
    linkText: 'Dining',
    child: true,
    link: "/dining",
    submenu: []

  },
  {
    id: 3,
    linkText: 'Rooms and Suites',
    child: true,
    link: "/room-suites",
    submenu:[]

  },
  {
    id: 4,
    link: '/weddings',
    linkText: 'Weddings',
    child: false,
  },
  {
    id: 5,
    link: '/offers',
    linkText: 'Offers',
    child: false,
  },
  {
    id: 6,
    link: '/sustainability',
    linkText: 'Sustainability',
    child: false,
  },
  {
    id: 7,
    link: '/contact',
    linkText: 'Contact Us',
    child: false,
  },
  {
    id: 8,
    link: '/whats-on',
    linkText: 'Leisure Activities',
    child: false,
  },
  {
    id: 9,
    link: '/sustainability',
    linkText: 'Sustainability',
    child: false,
  },
  {
    id: 10,
    link: '/spa-wellness',
    linkText: 'Spa & Wellness',
    child: false,
  },
  {
    id: 11,
    link: '/about-seychelles',
    linkText: 'About Seychelles',
    child: false,
  },
  {
    id: 12,
    link: '/gallery',
    linkText: 'Gallery',
    child: false,
  },
]


class Headertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false,
      isMobile: false,
      isTop: false,
      isDiningSubMenuOpen: false,
      isRoomSubMenuOpen: false,
      diningSubMenu: [],
      roomSubMenu: [],
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }

  toggleDiningMenu = () => {
    this.setState({
      isDiningSubMenuOpen: !this.state.isDiningSubMenuOpen,
      isRoomSubMenuOpen: false,
    });
  }
  toggleRoomMenu = () => {
    this.setState({
      isRoomSubMenuOpen: !this.state.isRoomSubMenuOpen,
      isDiningSubMenuOpen: false,
    });
  }
  addClass() {
    this.setState({
      redText: true
    });
  }

  removeClass() {
    this.setState({
      redText: false
    });
  }
  removeAll() {
    this.setState({
      redText: false
    });
  }
  async componentDidMount() {
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

    try {
      const diningResponse = await API.get('/dining');
      this.setState({ diningSubMenu: diningResponse.data });

      let diningSubMenu = diningResponse?.data?.map(x=>(
        {
          id: x.id,
          link:'/dining-inner/'+x.id,
          linkText:x.post_name
        }
      ))
      navigationmenu = navigationmenu.map(x=>{
        if (x.id == 2) {
          return {
            ...x, submenu: [{id:101,link:'/dining',linkText:'All Restaurants & Bars'} ,...diningSubMenu]
          }
        }else{
          return x;
        }
      })

      const roomsResponse = await API.get('/all_rooms', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      this.setState({ roomSubMenu: roomsResponse.data });

      let roomsSubMenu = roomsResponse?.data?.map(x=>(
        {
          id: x.id,
          link:'/rooms-inner/'+x.id,
          linkText:x.post_name
        }
      ))
      navigationmenu = navigationmenu.map(x=>{
        if (x.id == 3) {
          return {
            ...x, submenu: [{id:101,link:'/room-suites',linkText:'All Rooms & Suites'} ,...roomsSubMenu]
          }
        }else{
          return x;
        }
      })

    } catch (error) {
      console.log(error);
    }
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

    subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;

    if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
      subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
    }
  }
  render() {
    const className = this.props.isMobile ? 'breakpoint-on' : '';
    const classNamess = this.props.isMobile ? 'd-none' : '';
    const classNamesss = this.props.isTop ? 'sticky-active' : '';

    return (
      <div>
        {/*====== HEADER START ======*/}
        <header className={`header-absolute header-two sticky-header ${classNamesss}`}>
          <div className="container container-custom-one">
            <div className={`nav-container container px-0 d-flex align-items-center justify-content-between ${className}`}>
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

                <div className="flags-row d-none d-md-flex">
                  <div>
                    <img src={require('./../../assets/img/flags/flag1.png')} alt="flag" />
                  </div>
                  <div>
                    <img src={require('./../../assets/img/flags/flag2.png')} alt="flag" />
                  </div>
                  <div>
                    <img src={require('./../../assets/img/flags/flag3.png')} alt="flag" />
                  </div>

                </div>
                <div className="menu-items d-sm-none">
                  <ul>
                    {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                      <li key={i} className={` ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                          <ul className="submenu" role="menu">
                            {item.submenu.map((sub_item, i) => (
                              <li key={i} className={`${sub_item.child ? 'menu-item-has-child' : ''} `}>
                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
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
                <Link to="/" className="main-logo"><img src={require('./../../assets/img/logo-fisher.png')} alt="fishermans cove logo" /></Link>
                <Link to="/" className="sticky-logo mt-1"><img src={require('./../../assets/img/scroll-logo.png')} alt="fishermans cove logo" /></Link>
              </div>
              {/* Header Info Pussed To Menu Wrap */}
              <div className={`nav-push-item ${classNamess}`}>
                {/* Header Info */}
                <div className="header-info d-lg-flex flex-column ">
                  <div className="item d-lg-flex align-items-center ">
                    <>
                      <i className="fas fa-phone mr-2 d-inline-block" />
                      <a href="tel:+2484677000">
                        <span className="title">+248 467 7000</span>
                      </a>
                    </>
                    <>
                      <i className="fab fa-whatsapp mx-2 d-inline-block" />
                      <a href="https://wa.me/2482816329">
                        <span className="title">+248 281 6329</span>
                      </a>
                    </>
                  </div>
                  <div className="item d-lg-flex align-items-center">
                    <i className="fas fa-envelope mr-2 d-inline-block" />
                    <a href="mailto:reservations@fishermanscove-resort.com">
                      <span className="title">reservations@fishermanscove-resort.com</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Navbar Toggler */}
              <div className="navbar-toggler" onClick={this.navToggle} ref="navbtn">
                <span /><span /><span />
              </div>
            </div>
          </div>
        </header>
        {/*====== HEADER END ======*/}
        {/*====== OFF CANVAS START ======*/}
        <div className={classNames("offcanvas-wrapper", { "show-offcanvas": this.state.redText })}>
          <div className={classNames("offcanvas-overly", { "show-overly": this.state.redText })} onClick={this.removeAll} />
          <div className="offcanvas-widget">
            <Link to="#" className="offcanvas-close" onClick={this.removeClass}><i className="fal fa-times" /></Link>
            {/* Search Widget */}
            <div className="widget search-widget d-none">
              {/* <h5 className="widget-title">Search room</h5> */}
              <form action="#">
                <input type="text" placeholder="Search your keyword..." />
                <button type="submit"><i className="far fa-search" /></button>
                {
                  this.state.searchResults?.length > 0 &&
                  <div className="search-results">

                  </div>
                }
              </form>
            </div>
            {/* About Widget */}
            {/* <div className="widget d-none about-widget">
              <h5 className="widget-title">About us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis illo ipsa asperiores,
                perspiciatis corrupti veritatis assumenda architecto commodi provident quas necessitatibus
                consequatur praesentium magnam optio deserunt fugiat repellat culpa.
              </p>
            </div> */}
            {/* Nav Widget */}
            <div className="widget nav-widget">
              <h5 className="widget-title">Explore Fishermans Cove</h5>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li>
                  <Link to="#" onClick={this.toggleDiningMenu}>Dining &nbsp; <i className={`far ${this.state.isDiningSubMenuOpen ? 'fa-minus' : 'fa-plus'}`} /></Link>
                  <div className={"sidebar-submenu collapse" + (this.state.isDiningSubMenuOpen ? ' show' : '')}>
                    <ul>
                      <li key={"all"}><Link to={`/dining`}>{"All Restaurant & Bars"}</Link></li>
                      {
                        this.state.diningSubMenu?.map(x => (
                          <li key={x.id}><Link to={`/dining-inner/${x.id}`}>{x.post_name}</Link></li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#" onClick={this.toggleRoomMenu}>Rooms &amp; Suites &nbsp; <i className={`far ${this.state.isRoomSubMenuOpen ? 'fa-minus' : 'fa-plus'}`} /></Link>
                  <div className={"sidebar-submenu collapse" + (this.state.isRoomSubMenuOpen ? ' show' : '')}>
                    <ul>
                      <li key={"all"}><Link to={`/room-suites`}>{"All Rooms & Suites"}</Link></li>
                      {
                        this.state.roomSubMenu?.map(x => (
                          <li key={x.id}><Link to={`/rooms-inner/${x.id}`}>{x.post_name}</Link></li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
                <li><Link to="/weddings">Weddings</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/whats-on">Leisure Activities</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
                <li><Link to="/spa-wellness">Spa &amp; Wellness</Link></li>
                <li><Link to="/about-seychelles">About Seychelles</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            {/* Social Link */}
            <div className="widget social-link">
              <h5 className="widget-title">Follow us</h5>
              <ul>
                <li><a href="https://www.facebook.com/fishermanscoveresort/"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/fisherman_cove"><i className="fab fa-twitter" /></a></li>
                <li><a href="https://www.instagram.com/fishermanscove.resort/"><i className="fab fa-instagram" /></a></li>
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
