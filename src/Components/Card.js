import React from "react";

export default function Card({ benefits, tier, amount }) {
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {tier}
        </h5>
        <h6 className="card-price text-center">
          ${amount}
          <span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
           
          {benefits.map((value, key) => {
            return (
              <li key={key} className = { (value.provided ? "" : "text-muted")}>
                <span className="fa-li">
                  <i className={"fas " + (value.provided ? "fa-check" : "fa-times")}></i>
                </span>
                {value.benifit}
              </li>
            );
          })}
        </ul>
        <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  );
}
