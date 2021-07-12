import React from "react";

class FullName extends React.Component {
 state = {
   name: "aymen", 
   adress: "tunis" ,
   Phone :"55144104",
   age : 23
 };
 render() {
   return <div>
 <h1>hello {this.state.name}</h1>
<p>Age  : {this.state.age}  </p>
<ul>
  <li> Place :{this.state.adress} </li>
  <li> contactez: {this.state.Phone} </li>
</ul>



   </div> ;
   
   
 }
}
export default FullName;
 