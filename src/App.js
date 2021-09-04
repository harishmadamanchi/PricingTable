import React from "react";
import "./App.css";

import Card from './Components/Card';

function App() {
  const data = [
    {
      type: "Free",
      price: "0",
      benefits: [
        {
          benifit: "Single User",
          provided: true,
        },
        {
          benifit: "5GB Storage",
          provided: true,
        },
        {
          benifit: "Unlimited Public Projects",
          provided: true,
        },
        {
          benifit: "Community Access",
          provided: true,
        },
        {
          benifit: "Unlimited Private Projects",
          provided: false,
        },
        {
          benifit: "Dedicated Phone Support",
          provided: false,
        },
        {
          benifit: "Free Subdomain",
          provided: false,
        },
        {
          benifit: "Monthly Status Reports",
          provided: false,
        },
      ],
    },
    {
      type: "Plus",
      price: "9",
      benefits: [
        {
          benifit: "5 Users",
          provided: true,
        },
        {
          benifit: "50GB Storage",
          provided: true,
        },
        {
          benifit: "Unlimited Public Projects",
          provided: true,
        },
        {
          benifit: "Community Access",
          provided: true,
        },
        {
          benifit: "Unlimited Private Projects",
          provided: true,
        },
        {
          benifit: "Dedicated Phone Support",
          provided: true,
        },
        {
          benifit: "Free Subdomain",
          provided: true,
        },
        {
          benifit: "Monthly Status Reports",
          provided: false,
        },
      ],
    },
    {
      type: "Pro",
      price: "49",
      benefits: [
        {
          benifit: "Unlimited Users",
          provided: true,
        },
        {
          benifit: "150GB Storage",
          provided: true,
        },
        {
          benifit: "Unlimited Public Projects",
          provided: true,
        },
        {
          benifit: "Community Access",
          provided: true,
        },
        {
          benifit: "Unlimited Private Projects",
          provided: true,
        },
        {
          benifit: "Dedicated Phone Support",
          provided: true,
        },
        {
          benifit: "Free Subdomain",
          provided: true,
        },
        {
          benifit: "Monthly Status Reports",
          provided: true,
        },
      ],
    },
  ];
  return (
    <>
      
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((tier,value) => {
                return(
                  <div className="col-lg-4" key = {value}>
                    <Card benefits = {tier.benefits} tier = {tier.type} amount = {tier.price}/>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
