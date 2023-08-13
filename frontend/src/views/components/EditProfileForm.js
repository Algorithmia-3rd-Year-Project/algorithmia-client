import badge from "../../images/badge_example.png";
import { useState, useEffect } from "react";

const EditProfileForm = ({ showModal, handleCloseModal }) => {
  const modalStyle = {
    display: showModal ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  const modalContentStyle = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
  };

  var profileImage = sessionStorage.getItem('profileImage');
  var playerID = sessionStorage.getItem('playerID');

  if (profileImage == null) {
    profileImage = "user.png";
  }

  
  const [image, setimage] = useState(require('../../images/ProfileImages/' + profileImage)
  )

  const [formData, setFormData] = useState({
    PlayerName: 'Andy Horwitz',
    PlayerEmail: 'andy@gmail.com',
    ProfileImage: null,
    ProfileImageName: profileImage,
    PlayerID: playerID,
  });


  useEffect(() => {
    if (!showModal) {
      const defaultImage = require('../../images/ProfileImages/'+profileImage);
      setimage(defaultImage);
    }
  }, [showModal]);


  const newFormData = { ...formData };

  function handleChange(e) {
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
    console.log(newFormData);
  }

  function ImageUploadButton() {
    const ImgUploadBtn = document.getElementById('profileImageInput');
    ImgUploadBtn.click();
  }

  function handleImageChange(e) {
    const ImgFile = e.target.files[0];

    if (ImgFile) {

      setimage(URL.createObjectURL(ImgFile))

      setFormData({
        ...formData,
        ProfileImageName: ImgFile.name,
      });

      newFormData[e.target.name] = ImgFile;
      setFormData(newFormData);
      console.log(newFormData);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append('PlayerName', formData.PlayerName);
    formDataToSend.append('PlayerEmail', formData.PlayerEmail);
    formDataToSend.append('ProfileImage', formData.ProfileImage);
    formDataToSend.append('ProfileImageName', formData.ProfileImageName);
    formDataToSend.append('PlayerID', formData.PlayerID);

    fetch('/algorithmia/editprofile', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, if needed
        console.log('Server response:', data);

      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  }

  console.log(image);

  return (
    <div className="modal" style={modalStyle} id="modal">
      <div className="modal-dialog" style={modalContentStyle} role="document">
        <div className="modal-content">
          <div className="modal-body text-center mb-1">
            <h5 className="mt-1 mb-2">Edit Profile</h5>

            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="form1"
            >
              <div className="modal-header justify-content-center">
                <img
                  src={image}
                  id="viewProfileImage"
                  onClick={ImageUploadButton}
                  alt="avatar"
                  className="rounded-circle img-responsive"
                  style={{ height: '100px', width: '100px' }}
                />
                <input
                  type="file"
                  name="ProfileImage"
                  onChange={handleImageChange}
                  id="profileImageInput"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="md-form ml-0 mr-0">
                <input
                  type="text"
                  className="form-control form-control-sm validate ml-0"
                  value={formData.PlayerName}
                  onChange={handleChange}
                  name="PlayerName"
                />
                <br />
                <input
                  type="text"
                  className="form-control form-control-sm validate ml-0"
                  value={formData.PlayerEmail}
                  onChange={handleChange}
                  name="PlayerEmail"
                />
                <br />
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn btn-cyan mt-1"
                  style={{
                    borderColor: 'white',
                    color: 'white',
                    backgroundColor: '#002b5b',
                  }}
                  id="sendData"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;
