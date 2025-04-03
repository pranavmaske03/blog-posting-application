import React from 'react';
import { Login as LoginComponent } from '../components';
import { Container } from '../components';

function Login() {
  return (
    <Container>
      <div className="flex justify-center items-center min-h-[80vh]">
        <LoginComponent />
      </div>
    </Container>
  );
}

export default Login;
