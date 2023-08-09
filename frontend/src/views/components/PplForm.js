import { useState } from "react";
//import axios from 'axios';

const PplForm = () => {
  const [type, setType] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    var filename = file.name;

    formData.append("type", type);
    formData.append("product", product);
    formData.append("description", description);
    formData.append("sdate", sdate);
    formData.append("edate", edate);
    formData.append("file", filename);
    formData.append("ppl-images", file);

    console.log(file);
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
      setFile("");
      setError(null);
      console.log("Placement request sent!");
    }
  };

  return (
    <body style={{ backgroundColor: "#002B5B" }}>
      <div
        className="container border w-50 p-5 rounded-4"
        style={{ backgroundColor: "#ACDBDF" }}
      >
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="text-center mb-5" style={{ color: "#002B5B" }}>
            Product Placement Request Form
          </h2>
          <h5 className="mb-5">
            Fill the below form and advertise your product, brand in Algorithmia
          </h5>

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
              <option selected></option>
              <option value="1" id="type" required>
                One
              </option>
              <option value="2" id="type" required>
                Two
              </option>
              <option value="3" id="type" required>
                Three
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
              <option selected></option>
              <option value="1" id="product" required>
                One
              </option>
              <option value="2" id="product" required>
                Two
              </option>
              <option value="3" id="product" required>
                Three
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
            />
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
    </body>
  );
};

export default PplForm;
