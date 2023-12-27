import React, { useState, useContext } from 'react';
import { UserContext } from '../context/Authentication';
import { Card ,Form, Button} from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';


export default function Register() {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');



    const handleRegister = (e) => {
      e.preventDefault();
        register({ password, email, role});
        navigate('/formRusume');
    };



    return (
<>
<Card >
  <Card.Body>
    <h2 className='text-center mb-4'>Sign Up</h2>
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' required onChange={(e) => setEmail(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password'  required onChange={(e) => setPassword(e.target.value)}></Form.Control>
      </Form.Group>
      <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value='' disabled>Select role</option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
              </Form.Select>
            </Form.Group>
      <Button className='mt-3 w-100' type='submit' onClick={handleRegister}>Sign Up</Button>
    </Form>
  </Card.Body>
</Card>
<div className='w-100 text-center mt-3'>
  Already Have An Account? <Link to="/login"> Log In</Link>
</div>
</>
    )
}
