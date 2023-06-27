import { useState } from "react";

const DevlogForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const devlog = { title, type, content };

    const response = await fetch("/algorithmia/devlog/adddevlog", {
      method: "POST",
      body: JSON.stringify(devlog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setType("");
      setContent("");
      setError(null);
      console.log("New Devlog added", json);
    }
  };

  return (
    <div className="devlog-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button>Add Devlog</button>
        {error && <div className="error"> {error} </div>}
      </form>
    </div>
  );
};

export default DevlogForm;
