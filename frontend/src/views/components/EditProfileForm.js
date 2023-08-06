import badge from "../../images/badge_example.png";
import { useState} from "react";


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
    
    if(profileImage == null) {
      profileImage = "user.png"
    }

     

    const [PlayerName, setPlayerName] = useState("Andy Horwitz");
    const [PlayerEmail, setPlayerEmail] = useState("andy@gmail.com");
    
    const formDataToSend1 = new FormData();

    formDataToSend1.append("PlayerName", PlayerName);
    formDataToSend1.append("PlayerEmail", PlayerEmail);

    const [formData, setFormData] = useState({
      PlayerName: 'Andy Horwitz',
      PlayerEmail: 'andy@gmail.com',
      ProfileImage: null,
      ProfileImageName: null,
      PlayerID: playerID                   
    });

    const newFormData = { ...formData };

    function handleChange(e){
      newFormData[e.target.name] = e.target.value;
      setFormData(newFormData);
      console.log(newFormData);
    }

    function ImageUploadButton(){
      const ImgUploadBtn = document.getElementById('profileImageInput');
      ImgUploadBtn.click();
    }
   
    function handleImageChange(e){

      const ImgFile = e.target.files[0];
      
      if (ImgFile) {

        //const newFormData = { ...formData };
        
        newFormData[e.target.name] = ImgFile;
        newFormData["ProfileImageName"] = ImgFile.name;
        setFormData(newFormData);
        console.log(newFormData);
      }
    }
    

    function handleSubmit(e) {
    e.preventDefault();

    console.log(PlayerName)

    const formDataToSend = new FormData();
    formDataToSend.append("PlayerName", formData.PlayerName);
    formDataToSend.append("PlayerEmail", formData.PlayerEmail);
    formDataToSend.append("ProfileImage", formData.ProfileImage);
    formDataToSend.append("ProfileImageName", formData.ProfileImageName);
    formDataToSend.append("PlayerID", formData.PlayerID);

    const params = new URLSearchParams();
    params.append("PlayerName", formData.PlayerName);
    params.append("PlayerEmail", formData.PlayerEmail);
    params.append("ProfileImage", formData.ProfileImage);
    params.append("ProfileImageName", formData.ProfileImageName);
    params.append("PlayerID", formData.PlayerID);

    fetch("/profile/editprofile", {
      method: "POST",
      
      body: formDataToSend1,
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response if needed
          console.log("Profile updated successfully!");
        } else {
          // Handle error response if needed
          console.error("Failed to update profile.");
        }
      })
      .catch((error) => {
        // Handle network errors if needed
        console.error("Network error:", error);
      });
  }


    return (
      <div className="modal" style={modalStyle} id="modal">
        <div className="modal-dialog" style={modalContentStyle} role="document">
          <div class="modal-content">
            <div class="modal-body text-center mb-1">
              <h5 class="mt-1 mb-2">Edit Profile</h5>

              <form encType="multipart/form-data" onSubmit={handleSubmit} className="form1">
              <div class="modal-header justify-content-center">
              
                <img src={badge} id="viewProfileImage" onClick={ImageUploadButton} alt="avatar" class="rounded-circle img-responsive" style={{height: "100px", width: "100px"}}/>
                <input type="file" name="ProfileImage" onChange={handleImageChange} id="profileImageInput" style={{ display: 'none' }}/>
              </div>
            <div class="md-form ml-0 mr-0">
              <input type="text" class="form-control form-control-sm validate ml-0" value={formData.PlayerName} onChange={handleChange} name="PlayerName"  /><br/>
              <input type="text" class="form-control form-control-sm validate ml-0" value={formData.PlayerEmail} onChange={handleChange} name="PlayerEmail" /><br/>
            
            </div>
            <div class="text-center mt-4">
              <button  class="btn btn-cyan mt-1" style={{borderColor: 'white',color: 'white', backgroundColor: '#002b5b'}} id="sendData" >Save</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default EditProfileForm;