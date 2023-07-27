import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types';
function CommentInput ({addComment}){
    const[content,setContent] =  useInput ('');


    function onSubmitHandler(event){    
        event.preventDefault();
        addComment(content)
    }       
    return(
        <div className="comment-input">
            <h4>Berikan jawabanmu</h4>
            <form onSubmit={onSubmitHandler}>
                <textarea value={content} onChange={setContent}></textarea>
                <button>KIRIM</button>
            </form>
        </div>
    )
}
CommentInput.propTypes = {
    addComment: PropTypes.func.isRequired
}
export default CommentInput