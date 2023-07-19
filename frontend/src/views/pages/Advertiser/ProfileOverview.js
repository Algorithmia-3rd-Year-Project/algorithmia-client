const ProfileOverview = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="row">Overview</div>
          <div className="row">Request Form</div>
          <div className="row">Accound Settings</div>
        </div>
        <div className="col-1"></div>
        <div className="col">
          <div className="row">
            <div className="col-2">
              <div className="card bg-info">
                <div className="card-body">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">Advertiser Name</div>
              <div className="row">Company Name</div>
            </div>
          </div>
          <div className="row">
            <div>My Requests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
