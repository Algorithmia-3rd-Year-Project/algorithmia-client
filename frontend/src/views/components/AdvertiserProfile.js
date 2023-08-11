import { useEffect, useState } from "react";
import { useSessionContext } from "../../hooks/useSessionContext";

const AdvertiserProfile = () => {

  const [ppls, setPpl] = useState(null);
  const [loading, setPplLoading] = useState(true);
  const { user } = useSessionContext();
  const { id } = "64d47a6ace09fc3609b315e5";

  useEffect(() => {
    const fetchPpl = async () => {
      try {
        const response = await fetch("/algorithmia/userPpl/" + id, {
          method: "GET",
        });
        const json = await response.json();
        if (response.ok) {
          setPpl(json);
        }
      } catch (error) {
        //do something
      } finally {
        setPplLoading(false);
      }
    };
    fetchPpl();
  }, [id]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-3 border">
          <div className="row"><a href="c">Overview</a></div>
          <div className="row"><a href="c">Product Placement Request</a></div>
          <div className="row"><a href="c">Account Settings</a></div>
        </div>
        <div className="col border">
          <div className="row border">
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
          <div className="row border">
            <div className="container mt-5">
              <h5>My Product Placement Requests</h5>
              <div className="card shadow-none border rounded-0 mt-4">
              {ppls &&
              ppls.map((ppl) => (
                <p>{ppl.description}</p>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvertiserProfile;