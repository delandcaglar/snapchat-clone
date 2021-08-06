import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from "./Preview";



function App() {
  return (
      <div className="app">
          <Router>
          <div className="app__body">
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <div>
                    <WebcamCapture/>
                </div>
              </Route>
              <Route path="/preview">
                <div>
                    <Preview/>
                </div>
              </Route>
              <Route path="/chats">
                <div>
                    <Chats/>
                </div>
              </Route>

            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
