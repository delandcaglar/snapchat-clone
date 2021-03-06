import React, {useEffect, useState} from 'react'
import "./Chats.css"
import {Avatar} from "@material-ui/core";
import {ChatBubble, Search} from "@material-ui/icons";
import {auth, db} from "./firebase";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/appSlice";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import {useHistory} from "react-router-dom";
import {resetCameraImage} from "./features/cameraSlice";

function Chats() {
    const[posts, setPosts] = useState([])
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()

    const takeSnap = () =>{
        dispatch(resetCameraImage())
        history.push('/')

    }
    useEffect(()=>{
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot)=>
                setPosts(
                snapshot.docs.map((doc)=>({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    },[])

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic}
                        onClick={()=>auth.signOut()}
                        className="chats__avatar"/>
                <div className="chats__search">
                    <Search className="chats__searchIcon"/>
                    <input type="text" placeholder="Friends"/>
                </div>
                <ChatBubble className="chats__chatIcon"/>
            </div>

            <div className="chats__posts">
                {posts.map(
                    ({
                         id,
                         data:{profilePic, username,timestamp, imageUrl,read},
                     })=>(
                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                )
                )}


            </div>
            <RadioButtonUncheckedIcon
                className="chats__takePicIcon"
                onClick={takeSnap}
                fontSize="large"


            />

        </div>
    )
}

export default Chats


























