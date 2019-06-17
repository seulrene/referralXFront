import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const refer = props => {
    
  let message = null
if  (props.loggedInStatus==='LOGGED_IN')
{
  message = 
  <div>
  <br/>
  <br/>
  <br/>
  <br/>
   
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <form >
      <input 
        type="email" 
        name="email" 
        placeholder="Your Friend's Email"/>
       <Link to= "/Dashboard"> <button type="submit">Refer and Win!</button> </Link>
    </form>
  <br/>
  <br/></div>
 } 


 
 return (
    
    <div>
    <h1> Refer your friend and get a reward! </h1>
    {message}

  </div>
  );
};

export default refer;
