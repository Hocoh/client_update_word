
/****** 
 *  HTTP_REQUEST
 *  ******/

import {
    POST_FILE,
    POST_WORD,
    request,
    success,
    error
  } from "../actionTypes"
  
  export const postStatusReducer = (state ={}, action) => {

  console.log("postStatus reached - reducer")
    switch (action.status) {
      case request:
        console.log("Request start")
        return state
      case success:
        switch (action.type) {
          case POST_FILE:
            console.log("request succeed: ", action.res)
  
            var _id = action.res._id
            // var word= action.res.word
            return (Object.assign({}, state, {
              _id 
            }))
          case POST_WORD:
            console.log("request succeed: ", action.res)
            return (Object.assign({}, state, {
              _id: ""
            }))
          default : 
            console.log(`default state on success case in
                         postStatusReducer`)
            return state
      }
      case error:
        console.log("request error: ", action.err)
        return state
      default:
        return state
    }
  
}
