import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import { CommentContext } from './CommentContext';
import { useSessionContext } from "../../hooks/useSessionContext";

import { useState, useContext } from "react";

const AddComment = () => {

    const [content, setComment] = useState("");
    const { user } = useSessionContext();
    var user_id = "";
    if (user) {
        user_id = user.userID;
    }
    
    const [error, setError] = useState("");
    const { id } = useParams();
    const devlog_id = id;


    const { comments, setComments } = useContext(CommentContext);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newComment = { content, user_id, devlog_id };

        const response = await fetch("/algorithmia/devlog/addcomment", {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setComment("");
            setError(null);
            console.log("New Comment added", json);
        }

        const fetchComments = async () => {
            try {
                const response = await fetch("/algorithmia/comments/" + id, {
                    method: "GET",
                });
                const json = await response.json();
                if (response.ok) {
                    setComments(json);
                }
            } catch (error) {
                //do something
            } finally {
                //bleh
            }
        };
        fetchComments();
    };

    return (
        <form onSubmit={handleSubmit} className="w-100">
            <h5>Add a comment</h5>
            <div className="form-outline">
                <textarea
                    className="form-control"
                    name="content"
                    rows="4"
                    value={content}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>

                <div className="d-flex justify-content-between mt-3">
                    <button type="submit" className="btn btn-success">
                        Add Comment
                    </button>
                    {error && <div className="error"> {error} </div>}
                </div>
            </div>
        </form>
    )

}

export default AddComment;