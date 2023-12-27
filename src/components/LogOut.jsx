import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Authentication';
import {  Button} from 'react-bootstrap';

export default function LogOut() {

    const { logout } = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
  
        logout();   
      };
  return (
    <div>
              <Button className='mt-5 w-100' type='submit' onClick={handleLogin}>Log Out</Button>

    </div>
  )
}
