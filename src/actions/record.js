import {MOUNT_STREAM,
        START_RECORDING,
        STOP_RECORDING,
        SAVE_AUDIO
} from "../actionTypes"

export const startRecording = () => (e) => { 
    dispatch({type : MOUNT_STREAM})
    .then(() => 
    dispatch({type:START_RECORDING})
    .catch(err =>
        console.error('error :', err.message)
    )
)}


export const stopRecording = () => (e) => { 
    dispatch({type: STOP_RECORDING, e})
    .then(() => { 
        dispatch({type: SAVE_AUDIO, e})
    })
    .catch(err =>
        console.error('error :', err.message)
    )
}
