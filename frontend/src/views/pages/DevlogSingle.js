import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
//import { useSessionContext } from "../../hooks/useSessionContext"
import { CommentContext } from '../components/CommentContext';

import icon from "../../images/user.png";
import image from "../../images/beach.webp";

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
      <h5 className="text-muted">Published 23/09/2022</h5>
      <hr />
      <div className="row pt-3">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={image}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={image}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={image}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
        </div>
      </div>

      <section>
        <p>
            {devlog.content}
            <h4>1. Conceptualization and Design</h4>
            <p>Our journey began with a brainstorming session where our team of developers, designers,
              and educators collaborated to outline the core concepts and gameplay mechanics for Algorithmia.
              We aimed to strike a balance between engaging gameplay and educational content,
              ensuring that players not only have fun but also gain a deep understanding of data structures and algorithms.</p>
            </p>
            <h4>2. Creating the Virtual Learning Environment</h4>
            <p>To bring Algorithmia to life, we started by creating the virtual learning environment.
              Our artists and designers meticulously crafted a visually appealing world where players will navigate through challenges,
              puzzles, and interactive lessons. The environment is designed to resemble a futuristic coding academy,
              complete with vibrant landscapes and intriguing characters.</p>
            <h4>3. Interactive Lessons and Challenges</h4>
            <p>A significant portion of our effort went into designing interactive lessons and challenges that seamlessly integrate with the gameplay.
              We've crafted a diverse set of challenges, each focusing on a specific data structure or algorithm.
              Players will unravel the mysteries of linked lists, arrays, stacks, queues, sorting algorithms, and more as they progress through the game.</p>
            <h4>4. Game Mechanics and Progression</h4>
            <p>Algorithmia's gameplay mechanics are carefully designed to enhance learning.
              Players will have the opportunity to experiment with different data structures and algorithms in a risk-free environment.
              They'll code solutions, test theories, and witness the real-time effects of their decisions.
              As they conquer challenges, players will earn experience points, level up, and unlock advanced concepts.</p>
          
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
