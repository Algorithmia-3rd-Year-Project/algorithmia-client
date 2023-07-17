import { useState } from "react";

const DevlogForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [CoverImage, setCoverImg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const devlog = { title, type, content, CoverImage };

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
      setCoverImg("");
      setError(null);
      console.log("New Devlog added", json);
    }
  };

  return (
    <div className="devlog-form">
      
        <form onSubmit={handleSubmit}>
        
        <div class="row g-5">
          <div class="col">
            <div class="row justify-content-between text-left">
              <label htmlFor="title" class="form-label" style={{ textAlign: 'left' }}>Title</label>
                <input
                class="form-control"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            <div class="row justify-content-between text-left">
              <label htmlFor="type" class="form-label" style={{ textAlign: 'left' }}>Type</label>
                <input
                class="form-control"
                  type="text"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
            <div class="row justify-content-between text-left">
              <label htmlFor="content" class="form-label" style={{textAlign: 'left'}}>Content</label>
                <textarea
                class="form-control"
                  rows="4"
                  type="text"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                
              </div>
          </div>
          <div class="col">
            <div class="row justify-content-between text-left">
              <label htmlFor="coverImg" class="form-label" style={{ textAlign: 'left' }}>Cover Image</label>
              <input
                class="form-control"
                type="file"
                name="CoverImage"
                img src={CoverImage}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          </div>
          <button class="btn btn-primary btn-sm" style={{marginTop: '20px'}}>Add Devlog</button>
          {error && <div className="error"> {error} </div>}
        </form>
        
      </div>
    
  );
};

export default DevlogForm;
