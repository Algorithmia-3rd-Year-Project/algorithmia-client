import React, { useState } from "react";
import image from "../../images/devlog.jpg";
import { useSessionContext } from "../../hooks/useSessionContext";
import { Link } from 'react-router-dom';



// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CommentBlock = ({ comment }) => {
  
  const { user } = useSessionContext();
  //const user_id = user.userID;

  const [isDeleted, setIsDeleted] = useState(false);
  
    const deleteComment = async () => {
    try {
      const response = await fetch("/algorithmia/comments/deletecomment/" + comment._id, {
        method: "DELETE"
      });

      console.log(user._id);
      const json = await response.json();

      if (response.ok) {
        console.log("Comment deleted successfully");
        setIsDeleted(true);
      } else {
        console.error("Error deleting comment:", json.error);
        console.log(comment._id);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div>
      <div className="d-flex flex-start w-75 mt-3">
        <img
          className="rounded-circle shadow-1-strong me-3"
          src={image}
          alt="avatar"
          width="65"
          height="65"
          />
        <div className="flex-grow-1 flex-shrink-1">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-1">
                  Nethmie Imanya <span className="small">- 2 hours ago</span>
              </p>
            </div>
            <p className="small mb-0">
              {comment.content}
            </p>
          </div>
          {user && user.userID === comment.user_id ? (
            <Link to="#" onClick={deleteComment} className="btn btn-outline-danger btn-sm">
              Delete
            </Link>
          ) : null}
        </div>
      </div>
      <hr class="hr" />
    </div>
  );
};

export default CommentBlock;
