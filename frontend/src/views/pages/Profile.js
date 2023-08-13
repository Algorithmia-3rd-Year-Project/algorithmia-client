import badge from "../../images/badge_example.png";
import item from "../../images/item.png";
import { useState, useEffect } from "react";
import EditProfileModal from '../components/EditProfileForm'; 


  const playerID = sessionStorage.getItem('playerID')
  console.log(playerID)


const Profile = () => {

  const [profileData, setProfileData] = useState(null); // Initialize to null

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const playerID = sessionStorage.getItem('playerID');
    console.log(playerID);

    if (playerID) {
      fetch('/algorithmia/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ PlayerID: playerID }), 
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data);
        setProfileData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, []);

   

    return (
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-8">
              <div className="card">
                <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#002b5b", height:"200px"}}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{width: "150px", zIndex: "1"}}/>
                    <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                      style={{zIndex: "1", borderColor: 'white',color: 'white', backgroundColor: '#002b5b'}}  onClick={handleShowModal}> 
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{marginTop: "130px"}}>
                    <h5>{profileData?.name}</h5>
                    <p>{profileData?.email}</p>
                  </div>
                </div>
                <div className="p-4 text-black" style={{backgroundColor: "#acdbdf"}}>
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">{profileData?.level}</p>
                      <p className="small text-muted mb-0">Level</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">{profileData?.rank}</p>
                      <p className="small text-muted mb-0">Rank</p>
                    </div>
                  </div>
                </div>
                <section style={{backgroundColor: "#acdbdf"}}>
                <div className="card-body p-4 text-black" >
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Achievements</p>
                    <div className="p-4" style={{backgroundColor: "white", justifyContent: "center"}}>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>
                      <img src={badge} style={{borderRadius: "50%", width: "100px", height: "100px", margin: "20px"}}/>

                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Game Inventory</p>
                    <div className="p-4" style={{backgroundColor: "white", display: "flex", flexDirection: "row"}}>
                        <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
                            <img src={item} style={{ width: "100px", height: "100px", margin: "30px" }} />
                            <p style={{ margin: "20px" }}>Item</p> 
                        </div> 
                        <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
                            <img src={item} style={{ width: "100px", height: "100px", margin: "30px" }} />
                            <p style={{ margin: "20px" }}>Item</p> 
                        </div>  
                        <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
                            <img src={item} style={{ width: "100px", height: "100px", margin: "30px" }} />
                            <p style={{ margin: "20px" }}>Item</p> 
                        </div>  
                        <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
                            <img src={item} style={{ width: "100px", height: "100px", margin: "30px" }} />
                            <p style={{ margin: "20px" }}>Item</p> 
                        </div>  
                        <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
                            <img src={item} style={{ width: "100px", height: "100px", margin: "30px" }} />
                            <p style={{ margin: "20px" }}>Item</p> 
                        </div>  
                        <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
                            <img src={item} style={{ width: "100px", height: "100px", margin: "30px" }} />
                            <p style={{ margin: "20px" }}>Item</p> 
                        </div>                    
                    </div>
                  </div>
                </div>
                </section>
                
              </div>
            </div>
            <EditProfileModal showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
    );
  };
export default Profile;