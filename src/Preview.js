import React, {useEffect} from 'react'
import "./Preview.css"
import {resetCameraImage, selectCameraImage} from "./features/cameraSlice";
import {useDispatch, useSelector} from "react-redux";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import {useHistory} from "react-router-dom";
import {AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer} from "@material-ui/icons";
import {v4 as uuid} from "uuid"
import {db, storage} from "./firebase";
import firebase from "firebase"

function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        if (!cameraImage) {
            history.replace('/')
        }
    }, [cameraImage, history])

    const back = () => {
        history.push('/')

    }

    const closePreview = () => {
        dispatch(resetCameraImage())

    }

    const sendPost=() =>{
        const id = uuid();

        const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage,'data_url');

        uploadTask.on('state_changed',null, (error)=>{
            // Error function
            console.log(error);
        },()=>{
            // Complete function
            storage
                .ref('posts')
                .child(id)
                .getDownloadURL()
                .then((url)=>{
                    db.collection('posts').add({
                        imageUrl: url,
                        username: 'Delo',
                        read: false,
                        //profile pic
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    history.replace("/chats")
            })
        })



    }

    return (
        <div className="preview">
            <Close
                className="preview__close"
                onClick={closePreview}

            />
            <div className="preview__toolbarRight">
                <TextFields/>
                <Create/>
                <Note/>
                <MusicNote/>
                <AttachFile/>
                <Crop/>
                <Timer/>
            </div>
            <img src={cameraImage} alt=""/>
            <div
                onClick={sendPost}

                className="preview__footer">
                <h2>send</h2>
                <Send fontSize="small" className="preview__sendIcon" />
            </div>
            {/*<RadioButtonUncheckedIcon*/}
            {/*    className="webcamCapture__button"*/}
            {/*    onClick={back}*/}
            {/*    fontSize="large"*/}
            {/*/>*/}
        </div>


    )
}

export default Preview


























































































































































