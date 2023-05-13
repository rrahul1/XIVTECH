import React from 'react';
import "./style.css";

function CollabCard({data}) {
    
  return (
    <div className="main_card">
        <div className="card-detail">
            <div className="detail-box">
                <h2>{data.heading}</h2>
                <h3>{data.content}</h3>
                <a href="/">
                    {data.link}
                    <img src={data.linkArrow} alt="arrow" />
                </a>
            </div>
            <div className="img" >
                <img className="card-img" src={data.image} alt={data.image} />
            </div>
        </div>
    </div>
  )
}

export default CollabCard;