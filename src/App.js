import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayLanguage from './Language'
import AddLang from './AddLang'
import LANG from './AddLang'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About'
import Home from './Home'
import Users from './Users'
import NestedEditableDemo from './NestTable'

function App() {

  const [tab, setTab] = useState("disp");
  const [langs, setLangs] = useState(['python', 'react', 'java']);

  return (
    <>

      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
