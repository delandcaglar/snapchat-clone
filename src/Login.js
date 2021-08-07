import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import firebase from "firebase";
import {login} from "./features/appSlice";
import {provider,auth} from "./firebase"

function Login() {
    const dispatch = useDispatch()

    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then(result =>{
                dispatch(login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id:result.user.uid,
                }))
            }).catch(error =>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://golden-storage-production.s3.amazonaws.com/topic_images/984c56aab03844888e59db8164980c6c.jpeg" alt=""/>
                <Button variant="outlined" onClick={signIn}  >Sign In</Button>
            </div>

        </div>
    )
}

export default Login




















































































































































