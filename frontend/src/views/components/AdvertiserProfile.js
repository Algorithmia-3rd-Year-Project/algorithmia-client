import { useEffect, useState } from "react";
import { useSessionContext } from "../../hooks/useSessionContext";

const AdvertiserProfile = () => {

  const [ppls, setPpl] = useState(null);
  const [loading, setPplLoading] = useState(true);
  const { user } = useSessionContext();
  const id = "64d47a6ace09fc3609b315e5";

  // useEffect(() => {
  //   const fetchPpl = async () => {
  //     try {
  //       const response = await fetch("/algorithmia/userPpl/" + id, {
  //         method: "GET",
  //       });
  //       const json = await response.json();
  //       if (response.ok) {
  //         setPpl(json);
  //       }
  //     } catch (error) {
  //       //do something
  //     } finally {
  //       setPplLoading(false);
  //     }
  //   };
  //   fetchPpl();
  // }, [id]);

  // if (loading) {
  //   return <p>loading...</p>;
  // }

  return (
    <body style={{backgroundColor: "#002b5b"}}>
    <div className="container pt-4">
      <div className="row">
          <div className="row">
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#1a5f7a", height: "200px" }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                  style={{ width: "150px", zIndex: "1" }} />
              </div>
              <div className="ms-3" style={{ marginTop: "130px" }}>
                <h5>Andy Horwitz</h5>
                <p>andy@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container mt-5">
              <h5 style={{color: "white"}}>My Product Placement Requests</h5>
              <div className="card shadow-none border-none mt-4 p-4" style={{backgroundColor: "#acdbdf"}}>
                <div className="row">
                  {/* {ppls &&
              ppls.map((ppl) => (
                <p>{ppl.description}</p>
              ))} */}
                  <div className="col-4">
                    Product Type: Game Hardware Part <br /><br />
                    Placement Duration <br />
                    Start Date: 11/08/2023<br />
                  </div>

                  <div className="col-4">
                    Placement Type: In-game Shop <br /><br /><br/>
                    End Date: 15/09/2023<br />
                  </div>

                  <div className="col-4 text-end">
                    Status: Pending<br />

                  </div>
                </div>
              </div>
              <div className="card shadow-none border rounded-0 mt-4 p-4" style={{backgroundColor: "#acdbdf"}}>
                <div className="row">
                  {/* {ppls &&
              ppls.map((ppl) => (
                <p>{ppl.description}</p>
              ))} */}
                  <div className="col-4">
                    Product Type: GBrand Name <br /><br />
                    Placement Duration <br />
                    Start Date: 08/07/2023<br />
                  </div>

                  <div className="col-4">
                    Placement Type: Side Quest <br /><br /><br/>
                    End Date: 11/08/2023<br />

                  </div>

                  <div className="col-4 text-end">
                    Status: Accepted<br />

                  </div>
                </div>
              </div>
              <div className="card shadow-none border rounded-0 mt-4 p-4"style={{backgroundColor: "#acdbdf"}}>
                <div className="row">
                  {/* {ppls &&
              ppls.map((ppl) => (
                <p>{ppl.description}</p>
              ))} */}
                  <div className="col-4">
                    Product Type: Game Hardware Part <br /><br />
                    Placement Duration <br />
                    Start Date: 03/06/2023<br />
                  </div>

                  <div className="col-4">
                    Placement Type: In-game Shop <br /><br /><br/>
                    End Date: 20/06/2023<br />

                  </div>

                  <div className="col-4 text-end">
                    Status: Accepted<br />

                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </div>
    </div>
    </body>
  );
};
export default AdvertiserProfile;