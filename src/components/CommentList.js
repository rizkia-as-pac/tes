import React from "react";
import CommentItem,{ commentItemShape } from "./CommentItem";
import PropTypes from 'prop-types';

function CommentList({comments}){
    return(
        <div className="comment-list">
            {
                comments.length?
                comments.map((comment)=>(
                    <CommentItem
                    key={comment.id}
                    id={comment.id}
                    {...comment}
                    />
                ))
                : " Belum ada komentar"
            }
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  };
export default CommentList