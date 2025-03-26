import ServiceCard from "./conponents/ServiceCard";
import "./App.css";
import React from "react";

let service = [
  {name: " web-development", discription: "We are providing full-Stack Web-development service"}
];

 function App () {
  return(
  <div className="container">
    {service.map((ser) =>
    <ServiceCard name={ser.name} discription={ser.discription}/>
    )}
  </div>
  )
 }
export default App;
