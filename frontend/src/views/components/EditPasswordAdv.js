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
        borderRadius: '5px',
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
                        <div className="row">
                            <h5 class="mt-1 mb-2 col-11">Change Password</h5>
                            <button
                                type="button"
                                className="close col-1"
                                onClick={handleCloseModal}
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="md-form ml-0 mr-0">
                            <div class="md-form ml-0 mr-0 row mt-4">
                                <div className="col-5">Current Password</div>
                                <input type="text" class="form-control form-control-sm validate ml-0 col" value="Andy Horwitz" /><br />
                            </div>
                            <div class="md-form ml-0 mr-0 row mt-2">
                                <div className="col-5">New Password</div>
                                <input type="text" class="form-control form-control-sm validate ml-0 col" value="andy@gmail.com" /><br />
                            </div>
                            <div class="md-form ml-0 mr-0 row mt-2">   
                                <div className="col-5">Confirm Password</div>
                                <input type="text" class="form-control form-control-sm validate ml-0 col" value="andy@gmail.com" /><br />
                            </div> 
                        </div>
                        <div class="text-center mt-4">
                            <button class="btn btn-cyan mt-1" style={{ borderColor: 'white', color: 'white', backgroundColor: '#002b5b' }}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileForm;