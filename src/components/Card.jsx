import React from 'react';
import './Card.css';

export const Card = ({ title, category, banner, onClick }) => {
  return (
    <div className="card-container" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-image-wrapper">
        <img src={banner} alt={title} className="card-img" />
        <div className="card-tag">{category}</div>
      </div>
      
      <div className="card-body">
        <h3 className="card-name">{title}</h3>
        <button className="btn-visitar">Saber mais</button>
      </div>
    </div>
  );
};