import React, { useState } from "react";
import CommentBlock from "./CommentBlock"; // Adjust the path as needed

const CommentList = () => {
    const [comments, setComments] = useState([
        // Your initial comments array here
    ]);

    const handleCommentDelete = (commentId) => {
        // Filter out the deleted comment from the comments array
        const updatedComments = comments.filter(comment => comment._id !== commentId);
        setComments(updatedComments);
    };

    return (
        <div>
            {comments.map(comment => (
                <CommentBlock
                    key={comment._id}
                    comment={comment}
                    onDelete={handleCommentDelete}
                />
            ))}
        </div>
    );
};

export default CommentList;
