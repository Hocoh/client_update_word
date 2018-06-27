//  record
export const recordStep = {
    MOUNT_STREAM: "MOUNT_STREAM",
    START_RECORDING: "START_RECORDING",
    STOP_RECORDING: "STOP_RECORDING",
    SAVE_AUDIO: "SAVE_AUDIO",
    DELETE_AUDIO: "DELETE_AUDIO",
    ERROR: "ERROR"
}

//  formStep
export const formStep = {
    HANDLE_CHANGE: "HANDLE_CHANGE",
    HANDLE_SUBMIT: "HANDLE_SUBMIT"
}

//  httpRequest 

export const UPDATE_STATE_POSTWORD="UPDATE_STATE_POSTWORD";
export const POST_FILE="POST_FILE";
export const POST_WORD="POST_WORD";
export const GET_ID="GET_ID";
export const POST_WORD_REQUEST="POST_WORD_REQUEST";

// status 

export const request = "request";
export const error = "error";
export const success = "success";
export const err = "err"
export const res = "res"
export const postStatus = [{
        type: 'POST_FILE',
        status: request
    },
    {
        type: 'POST_FILE',
        status: success,
        res
    },
    {
        type: 'POST_FILE',
        status: error,
        err
    }

]