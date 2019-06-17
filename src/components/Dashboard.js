import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Registration from "./auth/Registration";



const Dashboard = props => {
let message = null
if  (props.loggedInStatus==='LOGGED_IN')
{
  message = 
  <div>
  <br/>
  <br/>
  <br/>
  <br/>
   <h1> Welcome to your profile ! </h1>
 	

  <br/>
  <br/>
  <br/>
  <br/>

 		<Link to= "/refer">Click here to Refer a friend</Link>
  <br/>
  <br/></div>
  
  

}


 
 return (
  	
    <div>
   	<h1> Dashboard </h1>
     {message}      

  </div>

  );
};

export default Dashboard;
