import React from 'react';

function Feature({title, description, icon }) {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" style={{marginTop:'2%'}}>
      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon"><i className={icon}></i></div>
        <h4 className="title">{title}</h4>
        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </div>
    </div>
  );
}

export default Feature;
