
const CommentForm = ({saveNewComment, handleCommentUserInput, handleCommentCommentInput, handleCommentSubjectInput, newCommentUser, newCommentComment, newCommentSubject }) => {
    
    return ( 
        <form onSubmit={saveNewComment}>
            <label htmlFor="new-comment-user">Username</label>
            <input id="new-comment-user" type="text" onChange={handleCommentUserInput} value={newCommentUser} />
            
            <label htmlFor="new-comment-subject">Subject</label>
            <input id="new-comment-subject" type="text" onChange={handleCommentSubjectInput} value={newCommentSubject} />            

            <label htmlFor="new-comment">Add a new comment</label>
            <textarea id="new-comment" rows="5" type="text" onChange={handleCommentCommentInput} value={newCommentComment}></textarea>
            
            <input type="submit" value="save-item" className="button"></input>
        </form>
     );
}
 
export default CommentForm;