/****** 
 *  UPDATE_STATE
 *  ******/

import {
    UPDATE_STATE_POSTWORD
} from "../actionTypes"

  const initialState = { word : "initialWord" }
 export const updateStateReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_STATE_POSTWORD:
            var word = action.word
            return (Object.assign({}, state, {
                word
            }))
        default:
            return state

    }
}
