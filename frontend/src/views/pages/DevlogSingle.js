import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
//import { useSessionContext } from "../../hooks/useSessionContext"

import icon from "../../images/user.png";
import image from "../../images/beach.webp";

import CommentBlock from "../components/CommentBlock";

import { useEffect, useState } from "react";

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

  const [comments, setComments] = useState(null);
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

  //const {user} = useSessionContext();
  const [content, setComment] = useState("");
  //const user_id = {user.id};
  const user_id = "testID";
  const [error, setError] = useState("");
  const devlog_id = id;

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
  };


  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div
      className="container mt-3 pt-3 border rounded-4"
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
          {devlog.content} Hey there, fellow adventurers! Welcome to the first
          edition of our game development devlog, where we'll be sharing
          behind-the-scenes details, progress updates, and exciting insights
          into the making of our upcoming game. Join us on this thrilling
          journey as we craft an unforgettable gaming experience.
        </p>
        <p>
          Devlog Entry #1: Conception and Inspiration In this inaugural devlog
          entry, we're excited to share the birth of our game and the
          inspirations that drive us. Our team has always been captivated by the
          magical worlds of classic role-playing games, where epic quests and
          fantastical creatures collide. Thus, we set out on a mission to create
          a game that evokes the same sense of wonder and adventure we felt as
          players. During the brainstorming phase, we delved deep into
          mythology, folklore, and various RPG genres to gather inspiration. We
          drew inspiration from the immersive storytelling of the "Final
          Fantasy" series, the strategic combat of "XCOM," and the atmospheric
          exploration of "The Legend of Zelda: Breath of the Wild." Armed with
          these influences, we set out to create a unique blend of gameplay
          mechanics and narrative depth.
        </p>
        <p>
          Devlog Entry #2: The Power of Procedural Generation One of the key
          pillars of our game's design is procedural generation, allowing for an
          endlessly diverse and ever-changing world. We've been hard at work
          developing a robust procedural generation system that creates unique
          landscapes, dungeons, and encounters for players to explore. Our
          algorithmic wizardry generates stunning vistas, treacherous mountain
          ranges, and sprawling forests, each teeming with secrets and
          challenges. We want players to feel a sense of awe and discovery every
          time they venture into uncharted territory.
        </p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevlogSingle;
