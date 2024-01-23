import React from "react";
import  ReactDOM  from "react-dom";


const content=React.createElement("h1",{},"welcome react with npm")
const child= React.createElement("div",{id:"child"},)
const Heading = React.createElement("div",{id:"parent"},[child,content])
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(Heading);
