import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        {
          props.items?.map((x, i) => (
            <li class={`breadcrumb-item ${x.isActive ? 'active' : ''}`} aria-current={`${x.isActive ? 'page' : ''}`}>
              <Link to={x.link}>{x.text}</Link>
            </li>
          ))
        }
      </ol>
    </nav>
  );
}

export default BreadCrumb;