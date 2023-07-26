
const ReviewModal = ({ showModal, handleCloseModal }) => {
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
          <div className="modal-content" style={{backgroundColor: "#acdbdf"}}>
            <div className="modal-header">
              <h5 className="modal-title">Add Review</h5>
              <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <textarea placeholder="Add your review..." style={{border: "None", backgroundColor: "#acdbdf", width:"100%"}}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal} style={{color: "#002b5b", backgroundColor: 'white', borderColor: "white", fontWeight: "bold"}}>Close</button>
              <button type="button" className="btn btn-primary" style={{ backgroundColor: '#002b5b', color: 'white', borderColor: '#002b5b' }}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ReviewModal;
