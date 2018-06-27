import Axios from "axios"
// state is handled by higher_order component # import store from "../store"
import {
  UPDATE_STATE_POSTWORD,
  POST_WORD_REQUEST,
  request,
  success,
  error
} from "../actionTypes"


// state is handled by higher_order component # const state = store.getState()

// # postFile_Thunk mode # 
export const postFile = (word, base64Data) => dispatch => {
  dispatch({
    type: 'POST_WORD',
    status: request
  });
  Axios.post("http://localhost:7500/api/files", {
      "word": word,
      "data": base64Data

    }, {
      "Content-Type": "multipart/form-data"
    })
    .then(res =>
      dispatch({
        type: 'POST_FILE',
        status: success,
        res
      }))
    .catch(err => {
      dispatch({
        type: 'POST_WORD',
        status: error,
        err
      })
    });


}


export const updateWord = word => {
  return {
    type: UPDATE_STATE_POSTWORD,
    word
  };
} 

export const postWord = (word, definition, _id) => dispatch => {

  dispatch({
    type: POST_WORD_REQUEST,
    status: request
  });
  Axios.post("http://localhost:7500/api/words", {
      word: word,
      definition: definition,
      _id
    })
    .then(res =>
      dispatch({
        type: 'POST_WORD',
        status: success,
        res
      }))
    .catch(err => {
      dispatch({
        type: 'POST_WORD',
        status: error,
        err
      })
    });


}