import React from 'react';
import { constants } from '../../../utils/constants';

const SeychellesPillarsBlock = ({ activeLang }) => {
  return (
    <div className="pillars-block py-4 seyehclles-about-content">
      <div className="container">
        <div className="d-flex flex-wrap">

          <div class="col-md-4 col-sm-6 col-12 ">
            <img alt="" src={require('./../../../assets/img/icon/market.png')} style={{ height: "30px", margin: '10px auto', display: 'block' }} />
            <h4 class="mb-3">
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_1?.title[activeLang]}
            </h4>
            <p>
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_1?.detail[activeLang]}
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-12 ">
            <img alt="" src={require('./../../../assets/img/icon/tree.png')} style={{ height: "35px", margin: '10px auto', display: 'block' }} />

            <h4 class="mb-3">
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_2?.title[activeLang]}
            </h4>
            <p>
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_2?.detail[activeLang]}
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-12 ">
            <img alt="" src={require('./../../../assets/img/icon/temple.png')} style={{ height: "35px", margin: '10px auto', display: 'block' }} />

            <h4 class="mb-3">
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_3?.title[activeLang]}
            </h4>
            <p>
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_3?.detail[activeLang]}
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-12 mt-5">
            <img alt="" src={require('./../../../assets/img/icon/Cathedral.png')} style={{ height: "35px", margin: '10px auto', display: 'block' }} />

            <h4 class="mb-3">
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_4?.title[activeLang]}
            </h4>
            <p>
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_4?.detail[activeLang]}
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-12 mt-5">
            <img alt="" src={require('./../../../assets/img/icon/Museum.png')} style={{ height: "35px", margin: '10px auto', display: 'block' }} />

            <h4 class="mb-3">
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_5?.title[activeLang]}
            </h4>
            <p>
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_5?.detail[activeLang]}
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-12 mt-5">
            <img alt="" src={require('./../../../assets/img/icon/island.png')} style={{ height: "35px", margin: '10px auto', display: 'block' }} />

            <h4 class="mb-3">
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_6?.title[activeLang]}
            </h4>
            <p>
              {constants?.site_content?.aboutSeychelles_page?.pillars_block_sec?.block_6?.detail[activeLang]}
            </p>
          </div>

          {/* <div className="pillars-item img-wrapper">
            <img alt="" src={require('./../../../assets/img/sustain/pillars.jpg')} />
          </div>
          <div className="pillars-item">
            <h3 className="ml-sm-4">Market Street</h3>
            <p className="text-justify ml-sm-4">
            It is encouraged at Fisherman’s Cove to use recycled products. Strategies including ‘Reuse and Recycle’ of the paper, composting, segregation, Mobile app, ‘Refuse the straw’ have been strictly implemented to ensure the advancement towards a better and sustainable future.
          </p>
          
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default SeychellesPillarsBlock;