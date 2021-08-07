import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/appSlice";
import Login from "./Login";
import {auth} from "./firebase"


function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((authUser)=>{
            if (authUser){
                dispatch(login({
                    username:authUser.displayName,
                    profilePic: authUser.photoURL,
                    id: authUser.uid,
                }))
            } else{
                dispatch(logout)
            }
        })
    },[])

  return (
      <div className="app">
          <Router>
              {!user ? (
                  <Login/>
              ):(
                  <React.Fragment>
                      <img src="https://golden-storage-production.s3.amazonaws.com/topic_images/984c56aab03844888e59db8164980c6c.jpeg"
                           alt=""
                           className="app__logo"
                      />
                      <div className="app__body">
                          <div className="app_bodyBackground">
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

                      </div>
                  </React.Fragment>

                  )}
        </Router>
      </div>
  );
}

export default App;
