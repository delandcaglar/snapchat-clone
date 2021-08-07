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
import Chats from "./Chats";
import ChatView from "./ChatView";



function App() {
  return (
      <div className="app">
          <Router>
          <div className="app__body">
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
                <Route exact path="/chats">
                    <div>
                        <Chats/>
                    </div>
                </Route>
                <Route path="/chats/view">
                    <div>
                        <ChatView/>
                    </div>
                </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
