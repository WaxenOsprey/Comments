import {useState} from 'react';
import styled from 'styled-components';

const ReplyCard = ({commentId, replyUser, replyText, children }) => {
    
    const ReplyContainer = styled.li`
    display: flex;
    align-items: center;
    width: 500px;
    background-color: rgb(241,237,237);
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    `

    const Author = styled.h5`
    
    `
    
    return (
        <ReplyContainer>
            <Author>{replyUser}</Author>
            {children}
        </ReplyContainer>
    )
}

export default ReplyCard