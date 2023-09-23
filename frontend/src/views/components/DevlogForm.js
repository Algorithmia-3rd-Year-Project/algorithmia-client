import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef } from "react";

const DevlogForm = () => {
  const [title, setTitle] = useState("");
  console.log("tittle :" + title)

  const [type, setType] = useState("News");
  console.log("type :" + type)

  const [content, setContent] = useState("");
  console.log("content :" + content)

  const [coverImage, setCoverImage] = useState("");
  console.log("coverImage :" + coverImage)

  const [coverImageUrl, setCoverImageUrl] = useState("");

  const [error, setError] = useState("");
  
  const editorRef = useRef(null);


  const handleImageChange = (e) => {
    
    console.log(e.target.files);
    setCoverImageUrl(URL.createObjectURL(e.target.files[0]))
    setCoverImage(e.target.files[0]);
  };

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    //var imagename = coverImage.name;

    formData.append("title", title);
    formData.append("type", type);
    
    const editorData = editorRef.current.editor.getData();
    formData.append("content", editorData);

    formData.append("coverImage", coverImage);
    //formData.append("devlog-image", coverImage);

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
      setCoverImageUrl("");
      
      const data = await response.json();
      console.log('Devlog created successfully:', data);
    }
  };

  const handleEditorReady = editor => {
    console.log('Editor is ready to use!', editor);
  
    editor.plugins.get('FileRepository').createUploadAdapter = loader => {
      return {
        upload: async () => {
          const data = await loader.file;
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async event => {
              const base64Data = event.target.result;
              const img = new Image();
              img.src = base64Data;
  
              img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxWidth = 600; // Adjust this value as needed
                const maxHeight = 400; // Adjust this value as needed
                let newWidth = img.width;
                let newHeight = img.height;
  
                if (newWidth > maxWidth) {
                  newWidth = maxWidth;
                  newHeight = (img.height * maxWidth) / img.width;
                }
  
                if (newHeight > maxHeight) {
                  newHeight = maxHeight;
                  newWidth = (img.width * maxHeight) / img.height;
                }
  
                canvas.width = newWidth;
                canvas.height = newHeight;
  
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
  
                const resizedBase64 = canvas.toDataURL('image/jpeg', 0.5); // Adjust the quality as needed
                console.log(resizedBase64);

                resolve({ default: resizedBase64 });
              };
            };
            reader.readAsDataURL(data);
          });
        },
      };
    };
  }
  

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    //console.log({ event, editor, data });
    setContent(data);
    console.log(data);
  };

  return (
   
    <div className="devlog-form" >
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row g-5">
          <div className="col">
            <div className="fields mb-3">
              <label htmlFor="title" className="form-label fw-bold" style={{ textAlign: 'left' }}>Title</label>
              <label className="star fw-bold" style={{ color: "red" }}> *</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value) }
              />
            </div>
            <div className="fields mb-3">
              <label htmlFor="type" className="form-label fw-bold" style={{ textAlign: 'left' }}>Type</label>
              <label className="star fw-bold" style={{ color: "red" }}> *</label>
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
              <label htmlFor="content" className="form-label fw-bold" style={{ textAlign: 'left' }}>Content</label>
              <label className="star fw-bold" style={{ color: "red" }}> *</label>
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
                data= {content}                
                ref={editorRef}
                onReady={handleEditorReady}
                onChange={handleEditorChange}
              
              
            />

            </div>
        
          
            <div className="fields mb-3">
              <label htmlFor="coverImg" className="form-label fw-bold" style={{ textAlign: 'left' }}>Cover Image</label>
              <label className="star fw-bold" style={{ color: "red" }}> *</label>

              <input className="form-control" type="file" name="coverImage" onChange={handleImageChange}/>
              <div className="image-holder" style={{ marginLeft: '20px', width: '600px', height: '210px',  background:'white'}}>
              {coverImageUrl && (
                <img src={coverImageUrl} style={{ width: '270px', height: '205px', objectFit: 'contain', margin: 'auto', display: 'block' }} alt="Cover Preview"/>
                )}
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
