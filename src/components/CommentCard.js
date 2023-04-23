import dayjs from 'dayjs';
import { useState } from 'react';
import RelativeTime from 'dayjs/plugin/relativeTime'
import styled from 'styled-components';
import ReplyBox from './ReplyBox';
import ReplyCard from './ReplyCard';
dayjs.extend(RelativeTime);

const CommentCard = ({commentId, imageUrl, userName, datePosted, subject, children}) => {

    const [showReplyBox, setShowReplyBox] = useState(false)
    const [replies, setReplies] = useState([])


    const Card = styled.li`
        display: flex;
        align-items: center;
        width: 500px;
        background-color: rgb(241,237,237);
        margin: 10px auto;
        padding: 10px;
        border-radius: 5px;
    `

    const Image = styled.img`
        width: 150px;
        height: 150px;
        opacity: 0.8;

    `
    const Details = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 0.8rem;
        padding: 10px;
        margin-left: 10px;  
        margin-top: 10px auto;
        min-width: 0px;
        width: 60%;
    `

    const Author = styled.h3`
        color: rgb(124,90,165);
        margin: 0px;
        /* font-size: 1.3rem; */
    `

    const Subject = styled.h4`
        color: black;
    `

    const Comment = styled.p`
        font-size: 1rem;
    `

    const Wrapper = styled.span`
        display: flex;
        justify-content: start; 
        gap: 10px;   
    `

    const Like = styled.p`
        color: rgb(124,90,165);
    
    `

    const Reply = styled.p`
        color: rgb(124,90,165);
    `

    const Dot = styled.p`
        &::before {
            content: '\\2022';
        }
        margin-right: 2px;
        margin-left: 2px;
    `

    const Date = styled.p`
        color: rgb(139,139,246);
    `

    const ReplyButton = styled.button`
        color: rgb(124,90,165);
        border: none;
        background: none;
        cursor: pointer;
    `

    // const ReplyBox = styled.textarea`
    //     margin-top: 10px;
    //     width: 100%;
    //     resize: none;
    //     border-radius: 5px;
    //     border: 1px solid lightgray;
    // `





    const repliesCards = replies.map((replyObj, i) => {
        return(
            <ReplyCard key={i} user={replyObj.replyUser} replyId={replyObj.replyId} commentId={replyObj.commentId}>
                {replyObj.reply}
            </ReplyCard>
        )
    })

    const saveNewReply = (replyUser, replyText, commentId) => {
        const repliesListCopy = [...replies]
        const replyId = repliesListCopy.length
        repliesListCopy.push({
            commentId: commentId,
            replyId: replyId,
            user: replyUser,
            reply: replyText
        }) 
        setReplies(repliesListCopy)

        console.log("comment id now", commentId)
    }




    return (
        <Card>
            <Image img src={imageUrl}></Image>
            <Details>
                <Author>{userName}</Author>
                <Subject>{subject}</Subject>
                <Comment>{children}</Comment>
                    <Wrapper>
                        <Like>Like</Like>
                        <Dot/>
                        <ReplyButton onClick={ () => setShowReplyBox(!showReplyBox)}>Reply</ReplyButton>
                        <Dot/>
                        <Date>{dayjs(datePosted).fromNow()}</Date>  
                    </Wrapper>
                    {showReplyBox && 
                    <ReplyBox 
                        saveNewReply={saveNewReply}
                        commentId={commentId}
                    />}
                    <ul>{repliesCards}</ul>
            </Details>
        </Card>
    )   
}

export default CommentCard