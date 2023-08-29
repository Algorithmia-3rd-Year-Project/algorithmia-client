import { useState } from "react";
//import axios from 'axios';

const PplForm = () => {
  const [type, setType] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [error, setError] = useState("");

  

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);

    const previews = Array.from(selectedFiles).map((file) =>
      URL.createObjectURL(file)
    );
    setFilePreviews(previews);
    
  };


    

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    let filename = [];
    let Timestamp = Math.floor(Date.now() / 1000);

    for (var i = 0; i < files.length; i++){
       filename[i] = Timestamp+files[i].name;
       formData.append("ppl-images", files[i]);
    }
    

    formData.append("type", type);
    formData.append("product", product);
    formData.append("description", description);
    formData.append("sdate", sdate);
    formData.append("edate", edate);
    formData.append("file", filename);
    

    console.log(files);
    console.log(filename);
    const response = await fetch("/algorithmia/pplform/addppl", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setType("");
      setProduct("");
      setDescription("");
      setSdate("");
      setEdate("");
      setFiles("");
      setError(null);
      console.log("Placement request sent!");
    }
  };

  return (
    <div className="form pt-5">
      <div
        className="container border w-75 p-5 rounded-4"
        style={{ backgroundColor: "#ACDBDF" }}>
          
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="text-center mb-5" style={{ color: "#002B5B" }}>
            Product Placement Request Form
          </h2>
          <h6 className="mb-5">
            Fill the below form and advertise your product, brand in Algorithmia
          </h6>

          <div className="fields mb-3">
            <label className="form-label fw-bold" htmlFor="type">
              Placement Type
            </label>
            <label className="star fw-bold" style={{ color: "red" }}>
              {" "}
              *
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="shop" id="type" required>
                Shop
              </option>
              <option value="quest" id="type" required>
                Quest
              </option>
            </select>
          </div>

          <div className="fields mb-3">
            <label className="form-label fw-bold" htmlFor="product">
              Product
            </label>
            <label className="star fw-bold" style={{ color: "red" }}>
              {" "}
              *
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="keyboard" id="product" required>
                Keyboard
              </option>
              <option value="mouse" id="product" required>
                Mouse
              </option>
              <option value="monitor" id="product" required>
                Monitor
              </option>
              <option value="processor" id="product" required>
                Processor
              </option>
              <option value="memory" id="product" required>
                Memory
              </option>
              <option value="storage" id="product" required>
                Storage
              </option>
            </select>
          </div>

          <div className="fields mb-3">
            <label className="form-label fw-bold" htmlFor="description">
              Description
            </label>
            <label className="star fw-bold" style={{ color: "red" }}>
              {" "}
              *
            </label>
            <textarea
              className="form-control"
              rows="4"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="fields mb-3">
            <label className="form-label fw-bold" htmlFor="duration">
              Select duration for the placement
            </label>
            <div className="row pb-3">
              <div className="form-group col-6">
                <label className="form-label" htmlFor="sdate">
                  Start Date
                </label>
                <label className="star fw-bold" style={{ color: "red" }}>
                  {" "}
                  *
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="sdate"
                  value={sdate}
                  onChange={(e) => setSdate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-6">
                <label className="form-label" htmlFor="edate">
                  End Date
                </label>
                <label className="star fw-bold" style={{ color: "red" }}>
                  {" "}
                  *
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="edate"
                  value={edate}
                  onChange={(e) => setEdate(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="fields mb-3">
            <label className="form-label fw-bold" htmlFor="formfile">
              Attachments
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="form-control"
              multiple
            />
            
            <div className="image-holder" style={{ marginLeft: '150px', width: '300px', height: 'flex', background: 'white' }}>
              {filePreviews.map((preview, index) => (
                <div key={index} style={{ maxWidth: "100px", maxHeight: "100px", margin: '5px' }}>
                  <img
                    src={preview}
                    alt={`Selected Preview ${index}`}
                    style={{ maxWidth: "100px", maxHeight: "100px", objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary w-25 mb-4 border-0"
              style={{ backgroundColor: "#002B5B" }}>
              Submit
            </button>
          </div>

          {error && <div className="error"> {error} </div>}
        </form>
      </div>
      </div>
  );
};

export default PplForm;
