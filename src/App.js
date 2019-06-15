import React from 'react';
import logo from './logo.svg';
import {Router} from '@reach/router'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import QuizUp from './components/Quiz'
import { Header } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header as='h2' image={ logo } content='Level Up!' style={ { padding: 10 } } />
      <Router>
        <Login path="/" />
        <QuizUp path="/quiz"/>
      </Router>

    </div>
  );
}

export default App;
