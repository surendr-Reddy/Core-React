import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement to create elements
const content = React.createElement("h1", {}, "Welcome to React with npm");
const child = React.createElement("div", { id: "child" });
const heading = React.createElement("div", { id: "parent" }, [child, content]);

console.log(React);

// JSX creating elements code
const jsxHeading = <h1 className="classNameShouldBeCamelCase">This is From JSX Element</h1>;

// JSX is not HTML; it has a syntax similar to HTML.
// Babel will convert JSX into React code, and then React will render it using the ReactDOM.render method.

// JSX (transpiled before it reaches the JS engine by Parcel and Babel)
// JSX => React.createElement (Babel does this) ==> ReactElement object ===> HTML element

// Using ReactDOM.createRoot to render the JSX element
// If it is multiple lines, wrap it in parentheses ()
const jsxHeading2 = (
  <div>
    <div>
      <h1>Welcome to React</h1>
    </div>
  </div>
);

// React component
// Class-based component
// Functional-based component

// React element
const reactElement = <div>This is a react element</div>;
const FunctionalComp2 = ()=><div>from functional component2</div>;
// Functional-based component
// The functional component should return the JSX
const FunctionalComp = () => 

<div> 
{/* //if wnat to run react elemet use{} bcz any of the js code we can write within in the jsx by {} */}
<FunctionalComp2/>
<h1>Hi from functional component</h1>{reactElement}{FunctionalComp2()}
<FunctionalComp2> </FunctionalComp2>

 {/* // we can call the function by {FunctionalComp2()} */}
 
</div>

// If we are calling a functional component inside another functional component, that is called component composition


const a= <FunctionalComp2> </FunctionalComp2>
// 3 types of declaring functions

// 1. Normal function
// name(2, 3);
function sum(a, b) {
  return a + b;
}

// 2. Function expression
const sumExpression = function (a, b) {
  return a + b;
};

// 3. Arrow function
const sumArrow = (a, b) => a + b;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComp/>); 
root.render(<FunctionalComp2> </FunctionalComp2>); 
root.render(a);
root.render(FunctionalComp());
