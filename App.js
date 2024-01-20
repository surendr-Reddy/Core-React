

const h1=React.createElement("dev",{id:"heading"},"")

const h1content= React.createElement("h1",{id:"h1"},"Namaste React")

const h1Sytle= React.createElement("h1",{id:"h1",style:{color:"blue"}},"Namaste react")

const heading =React.createElement("div",{},[h1,h1content,h1Sytle]);

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(h1content);//object

root.render(heading);
//or 
root.render(h1Sytle);


/**  WRITE HTML CODE LIKE 
 <DIV ID= PARENT>
     <DIV ID= CHILD>
 
     <H1 ID= HEADING> WELOCOME </DIV>
       </DIV>
  </DIV>
  */

  // IMPLEMENTITON

  const nastedHeading= React.createElement("div",{id:'parent'},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"Welocme")))
//   const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(nastedHeading);
// root.render(nastedHeading)



/**  WRITE HTML CODE LIKE 
 <DIV ID= PARENT>
     <DIV ID= CHILD>
 
     <H1 ID= HEADING> WELOCOME <H1>
     <H2 ID =heading2>namste javascript </h2>
       </DIV>
  </DIV>
  */

// IMPLEMENTITON


 const nastedsbiling= React.createElement("div",{id:'parent'},
 React.createElement("div",{id:"child"},
 [React.createElement("h1",{id:"heading"},"Welocme"),React.createElement("h1",{id:"heading2"},"Namste javascript")]))
//  root.render(nastedsbiling)




 /**  WRITE HTML CODE LIKE 
 <DIV ID= PARENT>
     <DIV ID= CHILD1>
        <H1 ID= HEADING> WELOCOME <H1>
        <H2 ID =heading2>namste javascript </h2>
    </DIV>
    <DIV ID= CHILD>
        <H1 ID= HEADING> WELOCOME <H1>
        <H2 ID =heading2>namste javascript </h2>
    </DIV>
  </DIV>
  */

// IMPLEMENTITON
const nastedsbilingdiv= React.createElement("div",{id:'parent'},

 [
React.createElement("div",{id:"child1"},[
  React.createElement("h1",{id:"heading"},"Welocme"),
  React.createElement("h1",{id:"heading2"},"Namste javascript")
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:"heading"},"Welocme"),
    React.createElement("h1",{id:"heading2"},"Namste javascript")
  ])
]
 
 )
 root.render(nastedsbilingdiv);


 // IMPLEMENTITON simplfiying 
const heading1 =React.createElement("h1",{id:"heading1"},"Welocme");
const heading2= React.createElement("h2",{id:"heading2"},"Namste javascript")
const heading3= React.createElement("h3",{id:"heading3"},"Namste javascript")
const heading4= React.createElement("h4",{id:"heading4"},"Namste javascript")


 const child1=React.createElement("div",{id:"child1"},[heading1,heading2]);
 const child2=React.createElement("div",{id:"child2"},[heading3,heading4]);

 const parent=React.createElement("div",{id:"parent"},[child1,child2]);
 root.render(parent);


  // the method of creatimg element is nasted loop so react intraduced jsx concept