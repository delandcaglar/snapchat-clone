import React, {useEffect} from 'react'
import "./Preview.css"
import {resetCameraImage, selectCameraImage} from "./features/cameraSlice";
import {useDispatch, useSelector} from "react-redux";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import {useHistory} from "react-router-dom";
import {AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer} from "@material-ui/icons";

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
            <div className="preview__footer">
                <h2>send</h2>
                <Send fontSize="small" className="preview__sendIcon" />
            </div>
            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                onClick={back}
                fontSize="large"
            />
        </div>


    )
}

export default Preview


























































































































































