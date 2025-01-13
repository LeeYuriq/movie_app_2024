import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Route>
       <Route path="/">
          <h1>Home</h1>
       </Route>
       <Route path="/home/introduction">
         <h1>Introduction</h1>
       </Route>
       <Route path="/about">
          <h1>About</h1>
       </Route>
     </Route>
    </HashRouter>
  );
}

export default App;
