 import {
   connect
 } from 'react-redux';
 import PostWord from '../components/word/PostWord';
 import {
   postWord as postWordAction,
  updateWord as updateWordAction
 } from "../actions/httpRequest";

 const mapStateToProps = (state) => {

   if (!state._id) {
     var _id = Math.floor((Math.random() * 10000) + 1);
   }

   return {
     _id
   }
 }

 const mapDispatchToProps = {

   postWord: postWordAction,
   updateWord: updateWordAction

 }

 const PostWordContainer = connect(mapStateToProps, mapDispatchToProps)(PostWord)
 export default PostWordContainer