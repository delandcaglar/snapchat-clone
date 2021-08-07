import React from 'react'
import "./Chat.css"
import {Avatar} from "@material-ui/core";
import {StopRounded} from "@material-ui/icons";
import TimeAgo from 'react-timeago';
import {useDispatch, useSelector} from "react-redux";
import {selectCameraImage} from "./features/cameraSlice";
import {selectImage, selectUser} from "./features/appSlice";
import {db} from "./firebase";
import {useHistory} from "react-router-dom";


function Chat({id,username,timestamp,imageUrl,read,profilePic}) {
    const dispatch = useDispatch()
    const history = useHistory()


    const open = ()=>{
        if(!read){
            dispatch(selectImage(imageUrl))
            db.collection('posts').doc(id).set({
                read: true,
            },{merge: true})
        }
        history.push('/chats/view')
    }
    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic} alt={username}/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p>
                    {!read && "Tap to view -"}{" "}
                    <TimeAgo date={new Date(timestamp?.toDate()).toUTCString()}/>
                </p>
            </div>
            {!read && <StopRounded className="chat__readIcon" />}

        </div>
    )
}

export default Chat




















































































































































