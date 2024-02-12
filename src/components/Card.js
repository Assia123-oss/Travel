import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={`../images/${props.coverImg}`} className="card--image" alt="" />
      <div className="card--compo">
        <div className="card--stats">
          <img src="../images/locator.svg" alt="" />
          <p>{props.country}</p>
          <a href="#" className="card--link">{props.link}</a>
        </div>
        <h1 className="card--text">{props.text}</h1>
        <p className="card--date">{props.date}</p>
        <p className="card--desc">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
