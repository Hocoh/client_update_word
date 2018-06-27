import { combineReducers } from "redux";

import {postStatusReducer as post} from "./status"
import {updateStateReducer as entry}from "./updateState";

// only one reducer active 
const appReducer = combineReducers({ 
    entry,
    post
    
})
export default appReducer