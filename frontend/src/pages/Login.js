import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div 
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
        }}
    >
      <h2>LOGIN PAGE</h2>
      <p>
          <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default Login