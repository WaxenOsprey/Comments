import React, { useState } from 'react';

const ReplyBox = ({ saveNewReply, commentId }) => {
  const [replyUser, setReplyUser] = useState('');
  const [replyText, setReplyText] = useState('');

  const handleReplyUserChange = (event) => {
    setReplyUser(event.target.value);
  };

  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveNewReply(replyUser, replyText, commentId);
    setReplyUser('');
    setReplyText('');   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-reply-user"></label>
      <input
        id="new-reply-user"
        type="text"
        onChange={handleReplyUserChange}
        value={replyUser}
        placeholder='username'
        required
      />

      <label htmlFor="new-reply-text"></label>
      <textarea
        id="new-reply-text"
        onChange={handleReplyTextChange}
        value={replyText}
        placeholder='reply...'
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default ReplyBox;
