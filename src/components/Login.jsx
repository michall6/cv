import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Authentication';
import { Card ,Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {

    const { login } = useContext(UserContext);
    const navigate = useNavigate();
 

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
      e.preventDefault();
       if(login({ password, email })===true){
        navigate('/formRusume')
       } 

        
    };

    return (



      <>
<Card >
  <Card.Body>
    <h2 className='text-center mb-5'>Log In</h2>
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' required onChange={(e) => setEmail(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' required onChange={(e) => setPassword(e.target.value)}></Form.Control>
      </Form.Group>
      <Button className='mt-3 w-100' type='submit' onClick={handleLogin}>Log In</Button>
    </Form>
  </Card.Body>
</Card>
<div className='w-100 text-center mt-3'>
  Need an account? <Link to="/register"> Sign Up</Link> 
</div>
</>
       

    )
}

/*

 <form className="container mt-5">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
        </div>
  
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
        </div>
  
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
*/




