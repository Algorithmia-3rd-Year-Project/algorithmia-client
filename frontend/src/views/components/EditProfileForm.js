import badge from "../../images/badge_example.png";

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

    return (
      <div className="modal" style={modalStyle}>
        <div className="modal-dialog" style={modalContentStyle} role="document">
          <div class="modal-content">
            <div class="modal-body text-center mb-1">
              <h5 class="mt-1 mb-2">Edit Profile</h5>
              <div class="modal-header justify-content-center">
                <img src={badge} alt="avatar" class="rounded-circle img-responsive" style={{height: "100px", width: "100px"}}/>
              </div>
            <div class="md-form ml-0 mr-0">
              <input type="text" class="form-control form-control-sm validate ml-0" value="Andy Horwitz"/><br/>
              <input type="text" class="form-control form-control-sm validate ml-0" value="andy@gmail.com"/><br/>
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-cyan mt-1" style={{borderColor: 'white',color: 'white', backgroundColor: '#002b5b'}}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default EditProfileForm;