import {useState} from 'react';
import CommentCard from './components/CommentCard';
import CommentForm from './components/CommentForm';


// implement a counter state which can be used to give simple ints to comments as id's 
// add a empty reply list property where replies could be attached to a comment and saved to comments

function App() {
  
  const[comments, setComments] = useState([
    {
      commentId: 100,
      imageUrl: "https://picsum.photos/100",
      userName: "William Wise",
      datePosted: new Date(2022, 7, 1),
      comment: "This comment is the wisest thing you've ever read",
      subject: "Philosophy"
    },
    {
      commentId: 101,
      imageUrl: "https://picsum.photos/101",
      userName: "Buddha",
      datePosted: new Date(600, 6, 18),
      comment: "As your focus transcends all types of objects, Unfixed on any mark of concreteness, Remain quiet, tranquil and awake!",
      subject: "Politics"
    }
  ])
  const [newComment, setNewComment] = useState(null);
  const [newCommentUser, setNewCommentUser] = useState("");
  const [newCommentComment, setNewCommentComment] = useState("")
  const [newCommentSubject, setNewCommentSubject] = useState("")


  const cards = comments.map((commentObj, i) => {
    return(
      <CommentCard key={i} imageUrl={commentObj.imageUrl} userName={commentObj.userName} datePosted={commentObj.datePosted} subject={commentObj.subject} commentId={commentObj.commentId}>
        {commentObj.comment}
      </CommentCard>
    )
  })

  const handleCommentUserInput = (event) => {
    setNewCommentUser(event.target.value)
  }

  const handleCommentCommentInput = (event) => {
    setNewCommentComment(event.target.value)
  }

  const handleCommentSubjectInput = (event) => {
    setNewCommentSubject(event.target.value)
  }

  const currentDate = new Date(); // create a new date object

  const saveNewComment = (event) => {
    event.preventDefault();
    const commentListCopy = [...comments]
    const commentId = commentListCopy.length + 100
    console.log("ID", commentId)
    commentListCopy.push({
      commentId: commentId,
      imageUrl: `https://picsum.photos/${commentId}`,
      userName: newCommentUser,
      datePosted: currentDate,
      comment: newCommentComment,
      subject: newCommentSubject
    })
    setComments(commentListCopy)
    setNewCommentUser('')
    setNewCommentComment('')  
    setNewCommentSubject('')
  }




  return (
    <>
      <CommentForm saveNewComment={saveNewComment} handleCommentUserInput={handleCommentUserInput} handleCommentCommentInput={handleCommentCommentInput} handleCommentSubjectInput={handleCommentSubjectInput} newCommentUser={newCommentUser} newCommentComment={newCommentComment} newCommentSubject={newCommentSubject}/>
      <ul>{cards}</ul>
    </>
  );
}

export default App;
