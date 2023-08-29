import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
//import { useSessionContext } from "../../hooks/useSessionContext"
import { CommentContext } from '../components/CommentContext';

import icon from "../../images/user.png";
import image1 from "../../images/patch1.jpg";
import image2 from "../../images/patch2.png";
import image3 from "../../images/patch3.jpg";

import CommentBlock from "../components/CommentBlock";
import AddComment from "../components/AddComment";

import { useEffect, useState, useContext } from "react";

const DevlogSingle = () => {
  const [devlog, setDevlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchDevlog = async () => {
      try {
        const response = await fetch("/algorithmia/devlog/" + id, {
          method: "GET",
        });
        const json = await response.json();

        if (response.ok) {
          setDevlog(json);
        }
      } catch (error) {
        //do something if error is found
      } finally {
        setLoading(false);
      }
    };

    fetchDevlog();
  }, [id]);

  const { comments, setComments } = useContext(CommentContext);
  useEffect(() => {
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
        setCommentLoading(false);
      }
    };
    fetchComments();
  }, [id]);

  useEffect(() => {
    // This code will run after devlog content is fetched
    if (devlog && devlog.content) {
      var ckeditorContent = devlog.content;
      var contentDiv = document.getElementById("devlogContent");
      contentDiv.innerHTML = ckeditorContent;
    }
  }, [devlog]);


  if (loading) {
    return <p>loading...</p>;
  }

  

  return (
    
<body style={{backgroundColor:"#002b5b"}}>
  .
    <div
      className="container p-5 mt-5 border rounded-4"
      style={{ backgroundColor: "#ACDBDF" }}
    >
      <h2 className="fw-bold" style={{ color: "#002B5B" }}>
        {devlog.title}
      </h2>
      <h5 className="text-muted">Published 25/07/2023</h5>
      <hr />
      <div className="row pt-3">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={image1}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={image2}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={image3}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
        </div>
      </div>

      <section id="devlogContent">
      
      </section>
      <hr />
      <section>
        <div className="container my-5">
          <div className="row">
            <h5>Comments</h5>
            {comments &&
              comments.map((comment) => (
                <CommentBlock key={comment._id} comment={comment} />
              ))}
          </div>
          <br />
          <br />
          <br />

          <div className="row">
            <div className="d-flex flex-start w-75">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src={icon}
                alt="avatar"
                width="65"
                height="65"
              />
              <AddComment />

            </div>
          </div>
        </div>
      </section>
    </div>
    </body>

  );
};

export default DevlogSingle;
