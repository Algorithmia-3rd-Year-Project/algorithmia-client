import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef } from "react";

const DevlogForm = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [error, setError] = useState("");
  const editorRef = useRef(null);


  const handleImageChange = (e) => {
    setCoverImage(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    var imagename = coverImage.name;

    formData.append("title", title);
    formData.append("type", type);
    
    const editorData = editorRef.current.editor.getData();
    formData.append("content", editorData);

    formData.append("coverImage", imagename);
    formData.append("devlog-image", coverImage);

    // console.log(coverImage);
    const response = await fetch("/algorithmia/devlog/adddevlog", {
      method: "POST",
      body: formData,
    });


    if (response.ok) {
      setTitle("");
      setType("");
      setContent("");
      setCoverImage("");
      setError(null);
      console.log("New Devlog added");
    }
  };

  return (
    <div className="devlog-form">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row g-5">
          <div className="col">
            <div className="fields mb-3">
              <label htmlFor="title" class="form-label fw-bold" style={{ textAlign: 'left' }}>Title</label>
              <label class="star fw-bold" style={{ color: "red" }}> *</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="fields mb-3">
              <label htmlFor="type" class="form-label fw-bold" style={{ textAlign: 'left' }}>Type</label>
              <label class="star fw-bold" style={{ color: "red" }}> *</label>
              {/* <Form.Select aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
                <option value="News">News</option>
                <option value="Features">Features</option>
              </Form.Select> */}
              <select
                className="form-select"
                aria-label="Default select example"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="News" required>
                  News
                </option>
                <option value="Features" required>
                  Fetures
                </option>
              </select>

            </div>
            <div className="fields mb-3">
              <label htmlFor="content" class="form-label fw-bold" style={{ textAlign: 'left' }}>Content</label>
              <label class="star fw-bold" style={{ color: "red" }}> *</label>
              {/* <textarea
                className="form-control"
                rows="4"
                type="text"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              /> */}
              <CKEditor
                editor={ClassicEditor}
                data=""
                ref={editorRef}
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
        
          
            <div className="fields mb-3">
              <label htmlFor="coverImg" class="form-label fw-bold" style={{ textAlign: 'left' }}>Cover Image</label>
              <label class="star fw-bold" style={{ color: "red" }}> *</label>
              <input
                className="form-control"
                type="file"
                name="coverImage"
                onChange={handleImageChange}
              />
              <div className="image-holder" style={{ marginLeft: '20px', width: '600px', height: '210px',  background:'white'}}>
                {coverImage && <img src={coverImage} style={{ width: '270px', height: '205px', objectFit: 'cover', margin: 'auto', display: 'block'}} alt="Cover Preview" />}
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
