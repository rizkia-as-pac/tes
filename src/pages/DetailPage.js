import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import CommentList from '../components/CommentList';
import ThreadDetail from "../components/ThreadDetail";
import CommentInput from '../components/CommentInput';
import { asyncReceiveThreadDetail,asyncAddComment} from "../states/threadDetail/action";

function DetailPage (){
    const {id} = useParams()
    const {
        threadDetail = null,
        users= [],
        authUser
    } = useSelector((states)=>states);
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);
  console.log(threadDetail)
  
  if (!threadDetail) {
    return null;
  }
  const onAddComment = (content) => {
    dispatch(asyncAddComment({ threadId: id, content }));
  };
  const allComment = threadDetail.comments.map((comment) => ({
    ...comment,
    user: users.find((user) => user.id === comment.id),
    authUser: authUser.id,
  }));
  return(
    <>
    <div className="container-thread-detail"> 
    <ThreadDetail {...threadDetail} />
    <CommentInput addComment={onAddComment}/>
    <CommentList comments={allComment}/>
    </div>
    </>
  )
}
export default DetailPage