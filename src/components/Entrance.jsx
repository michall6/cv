import React from 'react'
import Login from './Login';
import Register from './Register';


export default function Entrance() {

    const [isNewUser, setNewUser] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
      try {
        // Perform validation (e.g., check for empty username/password)
        if (!username || !password) {
          // Handle validation error
          return;
        }
    
        // Simulated API call for login (replace with actual API call)
        const response = await fetch('https://your-auth-api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          // Successfully logged in, perform further actions (e.g., store token in local storage)
          console.log('Login successful');
          // Redirect or update application state upon successful login
        } else {
          // Handle login failure
          console.error('Login failed');
          // Handle error or display appropriate message to the user
        }
      } catch (error) {
        // Handle any unexpected errors
        console.error('Error during login:', error);
      }
    };
    
    
    const handleRegister = async () => {
      try {
        // Perform validation (e.g., check for empty fields)
        if (!fullName || !phone || !email || !password) {
          // Handle validation error
          return;
        }
    
        // Simulated API call for user registration (replace with actual API call)
        const response = await fetch('https://your-auth-api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName, phone, email, password }),
        });
    
        if (response.ok) {
          // Successfully registered, perform further actions (e.g., redirect or login)
          console.log('Registration successful');
          // Redirect or update application state upon successful registration
        } else {
          // Handle registration failure
          console.error('Registration failed');
          // Handle error or display appropriate message to the user
        }
      } catch (error) {
        // Handle any unexpected errors
        console.error('Error during registration:', error);
      }
    };
    
  return (
    <div>
    {isNewUser ? (
      <Register
        setFullName={setFullName}
        setPhone={setPhone}
        setEmail={setEmail}
        setPassword={setPassword}
        handleRegister={handleRegister}
      />
    ) : (
      <Login setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} />
    )}

    <button onClick={() => setNewUser(!isNewUser)}>
      {isNewUser ? 'Already Have An Account? Login' : 'New User? Register'}
    </button>
  </div>
  )
}
