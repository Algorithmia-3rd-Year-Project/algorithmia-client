import { useState } from "react";
import Form from 'react-bootstrap/Form';

const DevlogForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(""); // Changed state variable name to lowercase
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCoverImage(reader.result);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const devlog = { title, type, content, coverImage }; // Changed variable name to lowercase

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
      setCoverImage("");
      setError(null);
      console.log("New Devlog added", json);
    }
  };

  return (
    <div className="devlog-form">
      <form onSubmit={handleSubmit}>
        <div className="row g-5">
          <div className="col">
            <div className="row justify-content-between text-left">
              <label htmlFor="title" className="form-label" style={{ textAlign: 'left' }}>Title</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row justify-content-between text-left">
              <label htmlFor="type" className="form-label" style={{ textAlign: 'left' }}>Type</label>
              <Form.Select aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
                <option value="News">News</option>
                <option value="Features">Features</option>
              </Form.Select>
            </div>
            <div className="row justify-content-between text-left">
              <label htmlFor="content" className="form-label" style={{ textAlign: 'left' }}>Content</label>
              <textarea
                className="form-control"
                rows="4"
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-between text-left">
              <label htmlFor="coverImg" className="form-label" style={{ textAlign: 'left' }}>Cover Image</label>
              <input
                className="form-control"
                type="file"
                name="coverImage"
                onChange={handleImageChange}
              />
              <div className="image-holder" style={{ marginLeft: '45px', width: '300px', height: '210px', borderStyle:'groove'}}>
                {coverImage && <img src={coverImage} style={{ width: '270px', height: '205px', objectFit: 'cover' }} alt="Cover Preview" />}
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-sm" style={{ marginTop: '20px' }}>Add Devlog</button>
        {error && <div className="error"> {error} </div>}
      </form>
    </div>
  );
};

export default DevlogForm;
