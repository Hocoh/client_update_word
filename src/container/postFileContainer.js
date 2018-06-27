import {
  connect
} from 'react-redux'
import {RecordingAPI} from '../components/recording/AudioRecording'
import {
  postFile as postFileAction
} from "../actions/httpRequest"



const mapStateToProps = (state) => {

  console.log("##### postFileContainer word state ##### : ", state.entry.word)
  let word = state.entry.word
  return {
    word
  }
}

const mapDispatchToProps = {
  postFile: postFileAction
}


const PostFileContainer = connect(mapStateToProps, mapDispatchToProps)(RecordingAPI);

export default PostFileContainer