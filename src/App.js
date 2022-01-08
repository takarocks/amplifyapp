import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
  return (
    <Authenticator>
    {({ signOut, user }) => (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi {user.username}! We now have Auth!</h1>
      </header>
      <button onClick={signOut} class="amplify-button" type="submit">Sign out</button>
    </div>
    )}
    </Authenticator>
  );
}