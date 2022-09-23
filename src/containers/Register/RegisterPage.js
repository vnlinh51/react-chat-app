import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card/Card';

import './register.css';

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <div className="register__container">
        <Card>
          <form>
            <h2>Sign Up</h2>
            <input
              type="text"
              name="firstName"
              id=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />

            <input
              type="text"
              name="lastName"
              id=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />

            <input
              type="text"
              name="email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              type="text"
              name="password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <div>
              <button>Sign Up</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterPage;
