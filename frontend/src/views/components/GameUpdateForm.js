import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function GameUpdate() {
  const [file, setFile] = useState();
  const [GameFileName, setGameFileName] = useState();

  const [formData, setFormData] = useState({
    verNum: "",
    pthTlt: "",
    Dcsrp: "",
    TgList: "",
    imgUpld: null,
    imgName: null,
    GameFile: null,
    GameFileName: null,
  });

  const newFormData = { ...formData };

  function handleChange(e) {
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
    console.log(newFormData);
  }

  function Click_imgUpldBtn() {
    const imgUpldBtn = document.getElementById("imgUpldBtn");
    imgUpldBtn.click();
  }

  function handleImgChange(e) {
    const ImgFile = e.target.files[0];
    if (ImgFile) {
      setFile(URL.createObjectURL(ImgFile));

      const newFormData = { ...formData };
      newFormData[e.target.name] = ImgFile;
      newFormData["imgName"] = ImgFile.name;
      setFormData(newFormData);
      console.log(newFormData);
    }
  }

  function Click_FUpldBtn() {
    const GmeFileUpld = document.getElementById("GmeFileUpld");
    GmeFileUpld.click();
  }

  function handle_FChange(e) {
    const gameFile = e.target.files[0];
    if (gameFile) {
      const newFormData = { ...formData };
      newFormData[e.target.name] = gameFile;
      newFormData["GameFileName"] = gameFile.name;
      setGameFileName(newFormData["GameFileName"]);
      setFormData(newFormData);
      console.log(newFormData);
    }
  }

  const [presentage, setPresentage] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("verNum", formData.verNum);
    formDataToSend.append("pthTlt", formData.pthTlt);
    formDataToSend.append("Dcsrp", formData.Dcsrp);
    formDataToSend.append("TgList", formData.TgList);
    formDataToSend.append("imgUpld", formData.imgUpld);
    formDataToSend.append("imgName", formData.imgName);
    formDataToSend.append("GameFile", formData.GameFile);
    formDataToSend.append("GameFileName", formData.GameFileName);

    document.getElementById("progress").style.display = "flex";

    axios
      .post("/algorithmia/gameupdate", formDataToSend, {
        onUploadProgress: (progressEvent) => {
          const percentage = (
            (progressEvent.loaded / progressEvent.total) *
            100
          ).toFixed(1);
          setPresentage(percentage);
        },
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

  }

  return (
    <>
      <div className="body" style={{ background: "#002b5b" }}>
        <div className="form pt-5">
          <div
            className="container border w-50 p-5 rounded-4"
            style={{ background: " #acdbdf" }}
          >
            <h2 className="text-center mb-5" style={{ color: "#002b5b" }}>
              Update Release
            </h2>
            <div className="wrapper1">
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="form1"
              >
                <div className="container mt-4">
                  <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="verNum">
                      Version Number
                    </label>
                    <label className="star fw-bold" style={{ color: "red" }}>
                      {" "}
                      *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="verNum"
                      name="verNum"
                      value={formData.verNum}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="pthTlt">
                      Patch Title
                    </label>
                    <label className="star fw-bold" style={{ color: "red" }}>
                      {""}*
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="pthTlt"
                      name="pthTlt"
                      value={formData.pthTlt}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="Dcsrp">
                      Description
                    </label>
                    <label className="star fw-bold" style={{ color: "red" }}>
                      {" "}
                      *
                    </label>

                    <textarea
                      className="form-control"
                      id="Dcsrp"
                      name="Dcsrp"
                      placeholder="Update Description"
                      rows="4"
                      value={formData.Dcsrp}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="TgList">
                      Tag List
                    </label>
                    <label className="star fw-bold" style={{ color: "red" }}>
                      {" "}
                      *
                    </label>
                    <textarea
                      className="form-control"
                      id="TgList"
                      name="TgList"
                      placeholder="Tag List"
                      maxLength="80"
                      value={formData.TgList}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <br />

                  <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="imgUpld">
                      Cover Image
                    </label>
                    <label className="star fw-bold" style={{ color: "red" }}>
                      {" "}
                      *
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="imgUpldBtn"
                      accept=".jpeg, .jpg, .png"
                      name="imgUpld"
                      onChange={handleImgChange}
                      style={{ display: "none" }}
                    />
                    <button
                      type="button"
                      className="btn btn-primary upload-btn"
                      id="cvrPhtBtn"
                      name="cvrPhtBtn"
                      onClick={Click_imgUpldBtn}
                    >
                      Change Cover Photo
                    </button>

                    <img className="cvr-img ms-4" alt="" src={file} style={{
                      width: "250px",
                      height: "200px",
                      display: "inline-block",
                      borderRadius: "5px",
                      backgroundColor: "white"
                    }} />
                  </div>

                  <div className="fields mb-3">
                    <label className="form-label fw-bold" htmlFor="GameFile">
                      Upload Game File
                    </label>
                    <label className="star fw-bold" style={{ color: "red" }}>
                      {" "}
                      *
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="GmeFileUpld"
                      name="GameFile"
                      accept=".exe, .zip"
                      onChange={handle_FChange}
                      style={{ display: "none" }}
                    />
                    <button
                      type="button"
                      className="btn btn-primary upload-btn"
                      id="GmeFileUpldBtn"
                      name="GmeFileUpldBtn"
                      onClick={Click_FUpldBtn}
                    >
                      Upload Game File
                    </button>
                  </div>

                  <div className="progress" id="progress" style={{
                    width: "600px",
                    marginLeft: "2%",
                    marginTop: "10px",
                    position: "absolute",
                    display: "none",
                    alignItems: "center"
                  }}>
                    <div
                      className="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={presentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${presentage}%` }}
                    >
                      {presentage}%
                    </div>
                  </div>

                  <p id="fileName">{GameFileName}</p>

                  <div className="form-group row">
                    <div className="col-sm-12 text-center" style={{paddingTop:"30px"}}>
                      <button
                        type="submit"
                        className="btn btn-primary w-20 mt-2"
                        id="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameUpdate;
