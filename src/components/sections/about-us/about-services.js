import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RoomGridItem from './about-grid-item';

const AboutServices = (props) => {
  const services = [
    {
      name: 'weddings',
      icon: 'far fa-rings-wedding',
      link:'/weddings'
    },
    {
      name: 'leisure activities',
      icon: 'far fa-swimmer',
      link:'/whats-on'
    },
    {
      name: 'rooms & suites',
      icon: 'far fa-bed',
      link:'/room-suites'
    },
    {
      name: 'Dining',
      icon: 'far fa-utensils',
      link:'/dining'
    },
  ]
  return (
    <div className='about-services-wrapper bg-light'>
      <div className="container">
        <div className="items-wrapper">
          {
            services.map((x, i) => (
              <div onClick={()=>props.history.push(x.link)} className={`about-service-item bg-white ${i == services.length - 1 ? 'mr-0' : 'mr-5'} ${i == 0 ? 'ml-0' : 'ml-5'} text-center p-4 d-flex align-items-center flex-column justify-content-center`}>
                <i className={`${x.icon} icon d-block h1`}></i>
                <span className="d-block">{x.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(AboutServices);