import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import API from '../../langapi/http';
import { Spinner, Dropdown } from "react-bootstrap";
import { constants } from "../../utils/constants";

// import PopUp from "../popup/PopUp";

// let navigationmenu = [
//   {
//     id: 1,
//     linkText: "About Us",
//     child: false,
//     link: "/about",
//   },
//   {
//     id: 2,
//     linkText: "Dining",
//     child: true,
//     link: "/fine-dining-seychelles",
//     submenu: [],
//   },
//   {
//     id: 3,
//     linkText: "Rooms and Suites",
//     child: true,
//     link: "/rooms-suites-seychelles",
//     submenu: [],
//   },
//   {
//     id: 4,
//     link: "/seychelles-wedding-resort",
//     linkText: "Weddings",
//     child: false,
//   },
//   {
//     id: 5,
//     link: "/whats-on",
//     linkText: "Leisure Activities",
//     child: false,
//   },
//   {
//     id: 6,
//     link: "/seychelles-eco-resort",
//     linkText: "Sustainability",
//     child: false,
//   },
//   {
//     id: 7,
//     link: "/spa-resort-seychelles",
//     linkText: "Spa & Wellness",
//     child: false,
//   },
//   {
//     id: 8,
//     link: "/about-seychelles",
//     linkText: "About Seychelles",
//     child: false,
//   },
//   {
//     id: 9,
//     link: "/offers",
//     linkText: "Offers",
//     child: false,
//   },
//   {
//     id: 10,
//     link: "/gallery",
//     linkText: "Gallery",
//     child: false,
//   },
//   {
//     id: 11,
//     link: "/contact",
//     linkText: "Contact Us",
//     child: false,
//   },
//   {
//     id: 12,
//     link: "/blog",
//     linkText: "Blog",
//     child: false,
//   },
// ];

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
      searchResults: "",
      navigationmenu: [],
      widgetMenuLinks: [],
      contact: null,
      offerPopup: true,
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.removeAll = this.removeAll.bind(this);

  }



  //languagesssss

  onChangeLocale = (locale) => {
    // console.log('lang', locale);

    const pathArray = window.location.pathname.split('/');
    const lang = 'en';
    console.log('i am here', pathArray[1]);
    if (pathArray[1] && (pathArray[1] == 'en' || pathArray[1] == 'fr' || pathArray[1] == 'de')) {
      console.log('i am here', pathArray[1]);

      if (pathArray[1] != locale) {
        let path = `/${locale}`;
        if (pathArray.length > 2) {
          for (let index = 2; index < pathArray.length; index++) {
            path += `/${pathArray[index]}`;
          }
        }
        if (window.location.search) {
          path += window.location.search;
        }
        window.location.replace(path);
      }
      // lang = pathArray[1]
    } else {
      window.location.replace(`/${locale}`);
    }
  }


  async componentDidMount() {

    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 1020,
        });
      },
      false
    );
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobile: window.innerWidth < 1020,
        });
      },
      false
    );
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 150,
        });
      },
      false
    );

    try {
      const activeLang = localStorage.getItem('lang');

      const menuResponse = await API.get(`/common?lang=${activeLang}`);

      let menuLinks = menuResponse.data?.data.find(
        (x) => x.type === "header"
      )?.menuItems;
      // debugger;
      let contact = menuResponse.data?.data?.find((x) => x.type === "header")?.contact;
      if (menuLinks) {
        this.setState({ widgetMenuLinks: menuLinks });
      }
      if (contact) {
        this.setState({ contact: contact });
      }

      // const diningResponse = await LangAPI.get(`/dinings?lang=${activeLang}`);
      // this.setState({ diningSubMenu: diningResponse.data?.data });

      // let diningSubMenu = diningResponse?.data?.data?.map((x) => ({
      //   id: x._id,
      //   link: "/dining/" + x.slug,
      //   linkText: x.post_name,
      // }));
      // navigationmenu = navigationmenu.map((x) => {
      //   if (x.id == 2) {
      //     return {
      //       ...x,
      //       submenu: [
      //         { id: 101, link: "/fine-dining-seychelles", linkText: "All Dining" },
      //         ...diningSubMenu,
      //       ],
      //     };
      //   } else {
      //     return x;
      //   }
      // });

      // const roomsResponse = await LangAPI.get(`/rooms?lang=${activeLang}`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // this.setState({ roomSubMenu: roomsResponse.data?.data });

      // let roomsSubMenu = roomsResponse?.data?.data?.map((x) => ({
      //   id: x._id,
      //   link: "/rooms/" + x.slug,
      //   linkText: x.post_name,
      // }));
      // // debugger;
      // navigationmenu = navigationmenu.map((x) => {
      //   if (x.id == 3) {
      //     return {
      //       ...x,
      //       submenu: [
      //         {
      //           id: 101,
      //           link: "/rooms-suites-seychelles",
      //           linkText: "All Rooms & Suites",
      //         },
      //         ...roomsSubMenu,
      //       ],
      //     };
      //   } else {
      //     return x;
      //   }
      // });
    } catch (error) {
      console.log(error);
    }
  }

  // toggleDiningMenu = () => {
  //   this.setState({
  //     isDiningSubMenuOpen: !this.state.isDiningSubMenuOpen,
  //     isRoomSubMenuOpen: false,
  //   });
  // };
  // toggleRoomMenu = () => {
  //   this.setState({
  //     isRoomSubMenuOpen: !this.state.isRoomSubMenuOpen,
  //     isDiningSubMenuOpen: false,
  //   });
  // };
  toggleSubMenu = (text) => {
    this.setState({
      [text]: !this.state[text],
    });
  };
  addClass() {
    this.setState({
      redText: true,
    });
  }

  removeClass() {
    this.setState({
      redText: false,
    });
  }
  removeAll() {
    this.setState({
      redText: false,
    });
  }
  navToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).toggleClass("menu-on");
    $(nvb).toggleClass("active");
  };
  removenavToggle = () => {
    const nv = findDOMNode(this.refs.navmenu);
    const nvb = findDOMNode(this.refs.navbtn);
    $(nv).removeClass("menu-on");
    $(nvb).removeClass("active");
  };
  getNextSibling = function (elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };

  // triggerChild = (e) => {
  //   let subMenu = "";

  //   subMenu =
  //     this.getNextSibling(e.target, ".submenu") !== undefined
  //       ? this.getNextSibling(e.target, ".submenu")
  //       : null;

  //   if (subMenu !== null && subMenu !== undefined && subMenu !== "") {
  //     subMenu.classList = subMenu.classList.contains("d-block")
  //       ? "submenu"
  //       : "submenu d-block";
  //   }
  // };

  render() {
    const className = this.props.isMobile ? "breakpoint-on" : "";
    const classNamess = this.props.isMobile ? "d-none" : "";
    const classNamesss = this.props.isTop ? "sticky-active" : "";
    const activeLang = localStorage.getItem('lang');


    return (
      <div>
        {/*====== HEADER START ======*/}
        <header
          className={`header-absolute header-two sticky-header ${classNamesss}`}
        >
          <div className="container container-custom-one">
            <div
              className={`nav-container container px-0 d-none d-sm-flex align-items-center justify-content-between ${className}`}
            >
              {/* Main Menu */}
              <div
                className="nav-menu d-lg-flex align-items-center"
                ref="navmenu"
              >
                {/* Navbar Close Icon */}
                <div className="navbar-close" onClick={this.removenavToggle}>
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Off canvas Menu  */}
                <div className="toggle" onClick={this.addClass}>
                  <Link to="#" id="offCanvasBtn">
                    <i className="fal fa-bars" />
                  </Link>
                </div>

                {/* Languages */}
                <div className="languageDropDown">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      {constants?.site_content?.header_content?.language[activeLang]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => this.onChangeLocale('en')}
                        className={`${activeLang === 'en' && 'active'}`}>
                        EN
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => this.onChangeLocale('fr')}
                        className={`${activeLang === 'fr' && 'active'}`}>
                        FR
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => this.onChangeLocale('de')}
                        className={`${activeLang === 'de' && 'active'}`}>
                        DE
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>


                {/* Mneu Items */}

                <div className="menu-items d-lg-none d-xl-none menuDisplay">
                  <ul>
                    {this.state.widgetMenuLinks?.map((x) =>
                      !x.subMenu?.length > 0 ? (
                        <li className="text-capitalize">
                          <Link to={`/${activeLang}/${x.slug}`}>{x.text}</Link>
                        </li>
                      ) : (
                        <li>
                          <Link to="#" onClick={() => this.toggleSubMenu(x.text)}>
                            {x.text} &nbsp;{" "}
                            <i
                              className={`far ${this.state[x.text] ? "fa-minus" : "fa-plus"
                                }`}
                            />
                          </Link>
                          <div
                            className={"sidebar-submenu collapse" + (this.state[x.text] ? " show" : "")}
                          >
                            <ul>
                              <li key={"all"}>
                                <Link to={`/${activeLang}/${x.slug}`}
                                  style={{ padding: "0px 0px 0 30px" }}
                                >{`All ${x.text}`}</Link>
                              </li>
                              {x.subMenu?.map((y) => (
                                <li key={y.id}>
                                  <Link to={`/${activeLang}/${y.base_url}/${y.slug}`}
                                    style={{ padding: "0px 0px 0 30px" }}
                                  >
                                    {y.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      )
                    )}





                    {/* {navigationmenu.length > 0
                      ? navigationmenu.map((item, i) => (
                        <li
                          key={i}
                          className={` ${item.child ? "menu-item-has-children" : ""
                            } `}
                          onClick={this.triggerChild}
                        >
                          {item.child ? (
                            <Link
                              onClick={(e) => {
                                e.preventDefault();
                                item.id === 2
                                  ? this.toggleDiningMenu()
                                  : this.toggleRoomMenu();
                              }}
                              to="#"
                            >
                              {" "}
                              {item.linkText}{" "}
                              <i
                                className={`far ${(
                                  item.id === 2
                                    ? this.state.isDiningSubMenuOpen
                                    : this.state.isRoomSubMenuOpen
                                )
                                  ? "fa-minus"
                                  : "fa-plus"
                                  }`}
                              />{" "}
                            </Link>
                          ) : (
                            <Link to={`/${activeLang}${item.link}`}> {item.linkText} </Link>
                          )}
                          {item.child ? (
                            <ul className="submenu" role="menu">
                              {item.submenu.map((sub_item, i) => (
                                <li
                                  key={i}
                                  className={`${sub_item.child
                                    ? "menu-item-has-child"
                                    : ""
                                    } `}
                                >
                                  {sub_item.child ? (
                                    <Link
                                      onClick={(e) => e.preventDefault()}
                                      to="/"
                                    >
                                      {" "}
                                      {sub_item.linkText}{" "}
                                    </Link>
                                  ) : (
                                    <Link to={`/${activeLang}${sub_item.link}`}>
                                      {" "}
                                      {sub_item.linkText}{" "}
                                    </Link>
                                  )}
                                  {sub_item.third_menu ? (
                                    <ul className="submenu">
                                      {sub_item.third_menu.map(
                                        (third_item, i) => (
                                          <li key={i}>
                                            <Link to={`/${activeLang}${third_item.link}`}>
                                              {third_item.linkText}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  ) : null}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))
                      : null} */}
                  </ul>
                  {/* Languages */}

                  {/* <div>
                    <ul className="submenu" role="menu">
                      <li>
                        <Link to="#" onClick={() => this.toggleSubMenu("Language")}>
                          {constants?.site_content?.header_content?.language[activeLang]} &nbsp;{" "}
                          <i
                            className={`far ${this.state["Language"] ? "fa-minus" : "fa-plus"
                              }`}
                          />
                        </Link>
                        <div
                          className={"sidebar-submenu collapse" + (this.state["Language"] ? " show" : "")}
                        >
                          <ul className="languageDropdown">
                            <li onClick={() => this.onChangeLocale('en')}
                              className={`${activeLang === 'en' && 'active'}`}
                            >
                              EN
                            </li>
                            <li onClick={() => this.onChangeLocale('fr')}
                              className={`${activeLang === 'fr' && 'active'}`}
                            >
                              FR
                            </li>
                            <li onClick={() => this.onChangeLocale('de')}
                              className={`${activeLang === 'de' && 'active'}`}
                            >
                              DE
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </div>
                {/* from pushed-item */}
                <div className="nav-pushed-item" />
              </div>
              {/* Languages */}
              <div className="languageDropDownMbl">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {constants?.site_content?.header_content?.language[activeLang]}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.onChangeLocale('en')}
                      className={`${activeLang === 'en' && 'active'}`}>
                      EN
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => this.onChangeLocale('fr')}
                      className={`${activeLang === 'fr' && 'active'}`}>
                      FR
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => this.onChangeLocale('de')}
                      className={`${activeLang === 'de' && 'active'}`}>
                      DE
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* Site Logo */}
              <div className="site-logo">
                <Link to="/" className="main-logo">
                  <img
                    src={require("./../../assets/img/logo-fisher.png")}
                    alt="fishermans cove logo"
                  />
                </Link>
                <Link to="/" className="sticky-logo mt-1">
                  <img
                    src={require("./../../assets/img/scroll-logo.png")}
                    alt="fishermans cove logo"
                  />
                </Link>
              </div>
              {/* Header Info Passed To Menu Wrap */}
              <div className={`nav-push-item ${classNamess}`}>
                {/* Header Info */}
                <div className="header-info d-lg-flex flex-column ">
                  <div className="item d-lg-flex align-items-center ">
                    <>
                      <i className="fas fa-phone mr-2 d-inline-block" />
                      <a
                        href={`tel:${this.state.contact?.phone?.replace(
                          /\s+/g,
                          ""
                        )}`}
                      >
                        <span className="title">
                          {this.state.contact?.phone}
                        </span>
                      </a>
                    </>
                    <>
                      <i className="fab fa-whatsapp mx-2 d-inline-block" />
                      <a
                        href={`https://wa.me/${this.state.contact?.phone
                          ?.replace("+", "")
                          .replace(/\s+/g, "")}`}
                      >
                        <span className="title">
                          {this.state.contact?.whatsapp}
                        </span>
                      </a>
                    </>
                  </div>
                  <div className="item d-lg-flex align-items-center">
                    <i className="fas fa-envelope mr-2 d-inline-block" />
                    <a href={`mailto:${this.state.contact?.email}`}>
                      <span className="title">{this.state.contact?.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Navbar Toggler */}
              <div
                className="navbar-toggler"
                onClick={this.navToggle}
                ref="navbtn"
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>
        {/*====== HEADER END ======*/}
        {/*====== OFF CANVAS START ======*/}
        <div
          className={classNames("offcanvas-wrapper", {
            "show-offcanvas": this.state.redText,
          })}
        >
          <div
            className={classNames("offcanvas-overly", {
              "show-overly": this.state.redText,
            })}
            onClick={this.removeAll}
          />
          <div className="offcanvas-widget">
            <Link to="#" className="offcanvas-close" onClick={this.removeClass}>
              <i className="fal fa-times" />
            </Link>

            <div className="widget nav-widget">
              <h5 className="widget-title">
                {constants?.site_content?.header_content?.explore[activeLang]}
              </h5>
              <ul>
                {this.state.widgetMenuLinks?.map((x) =>
                  !x.subMenu?.length > 0 ? (
                    <li className="text-capitalize">
                      <Link to={`/${activeLang}/${x.slug}`}>{x.text}</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="#" onClick={() => this.toggleSubMenu(x.text)}>
                        {x.text} &nbsp;{" "}
                        <i
                          className={`far ${this.state[x.text] ? "fa-minus" : "fa-plus"
                            }`}
                        />
                      </Link>
                      <div
                        className={"sidebar-submenu collapse" + (this.state[x.text] ? " show" : "")}
                      >
                        <ul>
                          <li key={"all"}>
                            <Link to={`/${activeLang}/${x.slug}`}>{`All ${x.text}`}</Link>
                          </li>
                          {x.subMenu?.map((y) => (
                            <li key={y.id}>
                              <Link to={`/${activeLang}/${y.base_url}/${y.slug}`}>
                                {y.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                )}
              </ul>

              {/* Languages */}

              {/* <div className="mt-2">
                <ul>
                  <li>
                    <Link to="#" onClick={() => this.toggleSubMenu("Language")}>
                      {constants?.site_content?.header_content?.language[activeLang]} &nbsp;{" "}
                      <i
                        className={`far ${this.state["Language"] ? "fa-minus" : "fa-plus"
                          }`}
                      />
                    </Link>
                    <div
                      className={"sidebar-submenu collapse" + (this.state["Language"] ? " show" : "")}
                    >
                      <ul className="languageDropdown">
                        <li onClick={() => this.onChangeLocale('en')}
                          className={`${activeLang === 'en' && 'active'}`}
                        >
                          EN
                        </li>
                        <li onClick={() => this.onChangeLocale('fr')}
                          className={`${activeLang === 'fr' && 'active'}`}
                        >
                          FR
                        </li>
                        <li onClick={() => this.onChangeLocale('de')}
                          className={`${activeLang === 'de' && 'active'}`}
                        >
                          DE
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>

            {/* Social Link */}
            <div className="widget social-link">
              <h5 className="widget-title">
                {constants?.site_content?.header_content?.follow[activeLang]}
              </h5>
              <ul>
                <li>
                  <a href="https://www.facebook.com/fishermanscoveresort/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/fisherman_cove">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/fishermanscove.resort/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div >


    );
  }
}

export default Headertwo;
