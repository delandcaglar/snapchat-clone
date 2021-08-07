import React, {useEffect} from 'react'
import "./ChatView.css"
import {useSelector} from "react-redux";
import {selectselectedImage} from "./features/appSlice";
import {useHistory} from "react-router-dom";

function ChatView() {
    const selectedImage = useSelector(selectselectedImage);
    const history = useHistory()

    useEffect(() => {
        if (!selectedImage){
            exit()
        }
    },[])
    const exit = ()=>{
        history.replace('/chats')

    }
    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt=""/>

        </div>
    )
}

export default ChatView