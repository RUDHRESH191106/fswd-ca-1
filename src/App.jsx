import ServiceCard from "./conponents/ServiceCard";
import "./App.css";
import React from "react";

let service = [
  {name: " Web-development", discription: "We are providing full-Stack Web-development service"},
  {name: "Front-end web-development", discription: "Styling for your we page"},
  {name: "Web-designing", discription: "Professional we-designing"}

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
