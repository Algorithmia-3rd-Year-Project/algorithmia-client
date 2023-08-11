import badge from "../../images/badge_example.png";
import { useState } from "react";
import EditProfileModal from '../components/EditPasswordAdv'; 



const AdvertiserAccountSettings = () => {
    const modalStyle = {
       
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

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
       
            <div className="modal-dialog" style={modalContentStyle} role="document">
                <div class="modal-content">
                    <div class="modal-body text-center mb-1">
                        <h5 class="mt-1 mb-2">Edit Profile</h5>
                        <div class="modal-header justify-content-center">
                            <img src={badge} alt="avatar" class="rounded-circle img-responsive" style={{ height: "100px", width: "100px" }} />
                    </div>
                    <br />
                    <div class="md-form ml-0 mr-0 row">
                        <div className="col-2 text-left">User Name</div>
                        <input type="text" class="form-control form-control-sm validate ml-0 col" value="Himass"/>
                    </div>
                    <br />
                    <div class="md-form ml-0 mr-0 row">
                        <div className="col-2 text-left">E-mail</div>
                        <div type="text" class="form-control form-control-sm validate text-start col">andy@gmail.com</div>
                    </div>
                    <br />
                    <div class="col-md d-flex justify-content-center">
                        <a href="#!" onClick={handleShowModal}>Change Password</a>
                    </div>

                    <div class="text-center mt-4">
                        <button class="btn btn-cyan mt-1" style={{ borderColor: 'white', color: 'white', backgroundColor: '#002b5b' }}>Save</button>
                    </div>
                </div>
            </div>
            <EditProfileModal showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
      
    );
};

export default AdvertiserAccountSettings;