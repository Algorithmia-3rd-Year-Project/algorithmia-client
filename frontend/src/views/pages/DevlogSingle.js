import "bootstrap/dist/css/bootstrap.css";

import icon from "../../images/user.png";
import image from "../../images/beach.webp";

import { useEffect, useState } from "react";

const DevlogSingle = () => {
  const [devlog, setDevlog] = useState(null);

  useEffect(() => {
    const fetchDevlog = async () => {
      const response = await fetch("/algorithmia/devlog/649925302740d709ec4399fb");
      const json = await response.json();

      if (response.ok) {
        setDevlog(json);
      }
    };

    fetchDevlog();
  }, []);

  return (
    <div className="container mt-3 pt-3 border rounded-4" style={{ backgroundColor: "#ACDBDF" }}>
      <h2 className="fw-bold" style={{ color: "#002B5B" }}>{devlog.title}</h2>
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
          Hey there, fellow adventurers!

          Welcome to the first edition of our game development devlog, where we'll be sharing behind-the-scenes details, progress updates, and exciting insights into the making of our upcoming game. Join us on this thrilling journey as we craft an unforgettable gaming experience.

        </p>
        <p>Devlog Entry #1: Conception and Inspiration

          In this inaugural devlog entry, we're excited to share the birth of our game and the inspirations that drive us. Our team has always been captivated by the magical worlds of classic role-playing games, where epic quests and fantastical creatures collide. Thus, we set out on a mission to create a game that evokes the same sense of wonder and adventure we felt as players.

          During the brainstorming phase, we delved deep into mythology, folklore, and various RPG genres to gather inspiration. We drew inspiration from the immersive storytelling of the "Final Fantasy" series, the strategic combat of "XCOM," and the atmospheric exploration of "The Legend of Zelda: Breath of the Wild." Armed with these influences, we set out to create a unique blend of gameplay mechanics and narrative depth.

        </p>
        <p>Devlog Entry #2: The Power of Procedural Generation
          One of the key pillars of our game's design is procedural generation, allowing for an endlessly diverse and ever-changing world. We've been hard at work developing a robust procedural generation system that creates unique landscapes, dungeons, and encounters for players to explore.
          Our algorithmic wizardry generates stunning vistas, treacherous mountain ranges, and sprawling forests, each teeming with secrets and challenges. We want players to feel a sense of awe and discovery every time they venture into uncharted territory.
        </p>
      </section><hr />

      <section>
        <div className="container my-5">
          <div className="row">
            <h5>Comments</h5>
            <div className="d-flex flex-start w-75">
              <img className="rounded-circle shadow-1-strong me-3"
                src={icon} alt="avatar" width="65"
                height="65" />
              <div className="flex-grow-1 flex-shrink-1">
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1">
                      Maria Smantha <span className="small">- 2 hours ago</span>
                    </p>
                  </div>
                  <p className="small mb-0">
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page.
                  </p>
                </div>
              </div>
            </div>
          </div><br /><br /><br />

          <div className="row">
            <div className="d-flex flex-start w-75">
              <img className="rounded-circle shadow-1-strong me-3"
                src={icon} alt="avatar" width="65"
                height="65" />
              <div className="flex-grow-1 flex-shrink-1">
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1">
                      Maria Smantha <span className="small">- 2 hours ago</span>
                    </p>
                  </div>
                  <p className="small mb-0">
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page.
                  </p>
                </div>
              </div>
            </div>
          </div><br /><br /><br />

          <div className="row">
            <div className="d-flex flex-start w-75">
              <img className="rounded-circle shadow-1-strong me-3" src={icon} alt="avatar" width="65" height="65" />
              <div className="w-100">
                <h5>Add a comment</h5>
                <div className="form-outline">
                  <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <button type="button" className="btn btn-success">Add Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default DevlogSingle;