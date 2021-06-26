// login form
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, TextField } from "@material-ui/core";
//import fetch from 'fetch';

const useStyles = makeStyles({
  button: {
    // display:'flex',
    // flexDirection: 'row',
    justify: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    textAlign: 'center',
  
  },
  box: {
      display: 'grid',
      placeItems: 'center',
  }, 
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'grey',
    margin: '0 40% 0 40%',
    width: 'clamp(100, 200, 300)',
    borderRadius: '5%',
    boxShadow: '10px 5px 5px red'
  }
});



export default function LoginForm() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [count, setCount] = useState(0);
  

  function clickHandler(e){
    // console.log(`Username is ${username} and Password is ${password}`);
    // e.preventDefault();
    
    //fetch that ish
    // fetch to endpoint /userlogin with username and password keys
    fetch('/api/userlogin',
      {
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({username, password })
      })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  const validateForm = function() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <div className={classes.div}>
    <h1>Login:</h1>
    <Box className={classes.box}>
        <TextField placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <TextField placeholder="password" onChange={(e) => setPassword(e.target.value)} /> 
        <br></br>
        <Button 
          type ="submit" 
          className={classes.button} 
          disabled={!validateForm()} 
          onClick={clickHandler}
          >PRESS THIS, YOU FOOL!!!</Button>
     
    </Box>
      <br></br>
      <a href="#">Sign up!?</a>
    </div>
)
};