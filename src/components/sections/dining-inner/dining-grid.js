import React from 'react';
import { constants } from '../../../utils/constants';
//import PdfSunsetBar from '../../../assets/img/dinning/FCR Wine List UPDATED.pdf';

const currentPage = window.location.pathname.split("/");

const DiningInnerInfo = (props) => {
  {
    console.log("currentpage", currentPage)
  }
  return (
    <div className='dining-info-wrapper'>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              {/* <div className="image-wrapper">
                <img src={require('./../../../assets/img/travellers-choice.png')} alt="" />
              </div> */}
              <p className="info-title">
                {constants?.site_content?.dinningInner_page?.diningInner_Info?.dress_code[props?.activeLang]}
              </p>
              <div dangerouslySetInnerHTML={{ __html: props.dress_code }}>

              </div>
              {/* <p className="text-muted">Daily: <br /> 7pm - 11pm</p>
              <p className="text-muted font-italic">*Advance dinner reservations required</p> */}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="travellers-choice">
              {/* <div className="image-wrapper">
                <img src={require('./../../../assets/img/travellers-choice.png')} alt="" />
              </div> */}
              <p className="info-title">
                {constants?.site_content?.dinningInner_page?.diningInner_Info?.opening_hours[props?.activeLang]}
              </p>
              <div dangerouslySetInnerHTML={{ __html: props.opening_hours }}>

              </div>
              {/* <p className="text-muted">Daily: <br /> Smart or elegant casuals, resort chick or appropriate footwear.</p>
              <p className="text-muted font-italic">No beachwear, sleeveless shirts or flipflops.</p> */}
            </div>
          </div>

          <div className="col-12 col-md-4">
            {props.menuPdf?.map((x, i) => (
              x.route === currentPage[3] &&
              <div className="menu-buttons" key={i}>
                <a href={x.ourMainMenu} className={x.ourMainMenu === "" ? "pdf_btn_hide" : ""} without rel="noopener noreferrer" target="_blank">
                  <button className="main-btn btn-filled">
                    {constants?.site_content?.dinningInner_page?.diningInner_Info?.our_menu[props?.activeLang]}
                  </button>
                </a>
                <a href={x.beverageMenu} className={x.beverageMenu === "" ? "pdf_btn_hide" : ""} without rel="noopener noreferrer" target="_blank">
                  <button className="main-btn btn-filled">
                    {constants?.site_content?.dinningInner_page?.diningInner_Info?.beverage_menu[props?.activeLang]}
                  </button>
                </a>
                <a href={x.wineList} className={x.wineList === "" ? "pdf_btn_hide" : ""} without rel="noopener noreferrer" target="_blank">
                  <button className="main-btn btn-filled">
                    {constants?.site_content?.dinningInner_page?.diningInner_Info?.Wine_list[props?.activeLang]}
                  </button>
                </a>
                <a href={x.inRoomDining} className={x.inRoomDining === "" ? "pdf_btn_hide" : ""} without rel="noopener noreferrer" target="_blank">
                  <button className="main-btn btn-filled">
                    {constants?.site_content?.dinningInner_page?.diningInner_Info?.room_dining[props?.activeLang]}
                  </button>
                </a>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningInnerInfo;