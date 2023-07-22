import badge from "../../images/badge_example.png"
import item from "../../images/item.png"

const Profile = () => {
    return (
        // <section class="h-100 gradient-custom-2">
        // <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-8">
              <div class="card">
                <div class="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#002b5b", height:"200px"}}>
                  <div class="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                      style={{width: "150px", zIndex: "1"}}/>
                    <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                      style={{zIndex: "1", borderColor: 'white',color: 'white', backgroundColor: '#002b5b'}}> 
                      Edit profile
                    </button>
                  </div>
                  <div class="ms-3" style={{marginTop: "130px"}}>
                    <h5>Andy Horwitz</h5>
                    <p>andy@gmail.com</p>
                  </div>
                </div>
                <div class="p-4 text-black" style={{backgroundColor: "#acdbdf"}}>
                  <div class="d-flex justify-content-end text-center py-1">
                    <div>
                      <p class="mb-1 h5">25</p>
                      <p class="small text-muted mb-0">Level</p>
                    </div>
                    <div class="px-3">
                      <p class="mb-1 h5">100</p>
                      <p class="small text-muted mb-0">Rank</p>
                    </div>
                  </div>
                </div>
                <section style={{backgroundColor: "#acdbdf"}}>
                <div class="card-body p-4 text-black" >
                  <div class="mb-5">
                    <p class="lead fw-normal mb-1">Achievements</p>
                    <div class="p-4" style={{backgroundColor: "white", justifyContent: "center"}}>
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

                  <div class="mb-5">
                    <p class="lead fw-normal mb-1">Game Inventory</p>
                    <div class="p-4" style={{backgroundColor: "white", display: "flex", flexDirection: "row"}}>
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
        </div>
        // </div>
    //   </section>
    );
  };
export default Profile;