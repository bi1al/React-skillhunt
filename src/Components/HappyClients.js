import React from "react";
import Clients from "./Clients";

function HappyClients() {
  return (
    <>
      <div className="happy-client-wrapper">
        <div className="clients-heading">
          <h2>TESTIMONIALS</h2>
          <h1>Happy Clients</h1>
        </div>
        <Clients />
      </div>
    </>
  );
}

export default HappyClients;
