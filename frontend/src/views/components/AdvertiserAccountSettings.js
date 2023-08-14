import badge from "../../images/badge_example.png";

import EditProfileModal from '../components/EditPasswordAdv'; 

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useSessionContext } from "../../hooks/useSessionContext";


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
        backgroundColor: '#ACDBDF',
        margin: '10% auto',
        padding: '25px',
        borderRadius: '5px',
        width: '80%',
    };

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [advertiser, setAdvertiser] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const { user, updateSessionContext } = useSessionContext();


    useEffect(() => {
        const fetchAdvertiser = async () => {
            try {
                const response = await fetch("/algorithmia/adprofile/" + id, {

                    method: "POST",
                });
                const json = await response.json();

                if (response.ok) {
                    setAdvertiser(json);
                }
            } catch (error) {
                //do something if error is found
            } finally {
                setLoading(false);
            }
        };

        fetchAdvertiser();
    }, [id]);

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
                        
                        {user ? (
                            <input type="text" class="form-control form-control-sm validate ml-0 me-3 col" value={user.userRole}/>
                        ) : (
                            <div className="col">Loading user data...</div>
                        )}
                    </div>
                    <br />
                    <div class="md-form ml-0 mr-0 row">
                        <div className="col-2 text-left">E-mail</div>
                        {user ? (
                            <div className="form-control form-control-sm validate text-start col me-3">{user.email}</div>
                        ) : (
                            <div className="col">Loading user data...</div>
                        )}
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