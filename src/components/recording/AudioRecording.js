/* eslint-env browser */
import React from 'react';

import { POST_WORD_REQUEST} from "../../actionTypes"; 
import "./audioRecording.css";



const audioType = 'audio/*';

export const RecordingAPI = class RecordingAPI extends React.Component {
  constructor(props) {
    super(props);

      this.checkState=this.checkState.bind(this)

    

    this.state = {
      word : this.props.word,
      state: this.props
    };
 
     
    
  }
 
   




  checkState(e){
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    console.dir(this.state.word)
    console.dir(this.state.state)
    
  } 
  render() {
    const {audios} = this.state;

    return (
      <div>
      <button onClick={(e) => this.checkState(e)}>  CheckState </button> 
      </div>);
  }
}
export default RecordingAPI
 

