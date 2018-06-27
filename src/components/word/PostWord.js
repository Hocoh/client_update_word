import React from "react";
import "./postWord.css" ;
import PostFileContainer  from "../../container/postFileContainer"


class PostWord extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      word: "",
      id: props.id,
      definition: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name] : e.target.value});

     if(e.target.name === "word"){ 
     this.props.updateWord(e.target.value)
    }
 }

 handleSubmit (evt) {
  evt.preventDefault() ;
  
  const {word, definition} = this.state;
  const _id = this.props._id;

  console.log("postWord.js __id of state : ", _id);

  this.props.postWord(word, definition, _id) 
  
  
  this.setState({word: ""})
  this.setState({definition: ""})
}

render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
            <label className="formLabel" htmlFor="word"> Enter a word </label>
            <input
              name="word"
              id="word"
              value={this.state.word}
              placeholder="enter a word"
              type="text"
              onChange={this.handleChange}
              />

        
          

            <label
              className="formLabel"
              htmlFor="audioRecord">
            </label>


            <PostFileContainer/>


           
      </form>
    )
}
}
export default PostWord
