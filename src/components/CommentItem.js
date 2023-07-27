import React from "react";
import { postedAt } from "../data";
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
function CommentItem({owner,createdAt,content}){
    return(
        <>
        <div className="comment-item">
            <div className="comment-item-header">
            <p>Jawaban dari :</p>
            <img src={owner.avatar} alt={owner.name}/>
            <h4>{owner.name}</h4>
            </div>
            <br></br>
            <p className="comment-item-content">{parse(content)}</p>
            <p className="comment-item-time">{postedAt(createdAt)}</p>
        </div>
        </>
    )
}
const ownerShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };
  
  const commentItemShape = {
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    authUser: PropTypes.string.isRequired,
    owner: PropTypes.shape(ownerShape).isRequired,
  };
  
  CommentItem.propTypes = {
    ...commentItemShape,
  };
  export { commentItemShape };      
export default CommentItem;