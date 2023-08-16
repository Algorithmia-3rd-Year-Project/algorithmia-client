import { useEffect, useState } from "react";
import { useSessionContext } from "../../../hooks/useSessionContext";
import AccountSettings from '../../components/AdvertiserAccountSettings'; 
import AdvertiserProfile from "../../components/AdvertiserProfile";
import AddPpl from "../../components/PplForm";

const ProfileOverview = () => {

  const [ppls, setPpl] = useState(null);
  const [loading, setPplLoading] = useState(true);
  const { user } = useSessionContext();
  const id = "64d47a6ace09fc3609b315e5";

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

  const [component, setComponent] = useState("overview");

  const getComponent = () => {
    switch (component) {
      case "overview":
        return <AdvertiserProfile />;
      case "accountSettings":
        return <AccountSettings />;
      case "ppl":
        return <AddPpl />;
      default:
        return null;
    }
  };

  return (
    <body style={{backgroundColor: "#002b5b"}}>
    <div className="container pt-5">
      <div className="row">
        <div className="col-3 border-start border-top">
            <div
              className="row p-3 pb-1 hsla(0, 0%, 98%, 0.35)"
              onClick={() => setComponent("overview")}
              style={{ cursor: "pointer" }}
            >
              <span
                className="text-decoration-none"
                style={{
                  color: component === "overview" ? "grey" : "white",
                  fontSize: "20px",
                }}
              >
                Overview
              </span>
            </div>
          <hr style={{color: "white"}}/>
            <div
              className="row p-3 pb1 pt-1"
              onClick={() => setComponent("ppl")}
              style={{ cursor: "pointer" }}
            >
              <span
                className="text-decoration-none"
                style={{
                  color:
                    component === "ppl" ? "grey" : "white",
                  fontSize: "20px",
                }}
              >
                Product Placement Requests
              </span>
            </div>
          <hr style={{color: "white"}}/>
            <div
              className="row p-3 pb1 pt-1"
              onClick={() => setComponent("accountSettings")}
              style={{ cursor: "pointer" }}
            >
              <span
                className="text-decoration-none"
                style={{
                  color:
                    component === "accountSettings" ? "grey" : "white",
                  fontSize: "20px",
                }}
              >
                Account Settings
              </span>
            </div>
          <hr style={{color: "white"}}/>
          </div>
          <div className="col border">{getComponent()}</div>
      </div>
    </div>
    </body>
  );
};
export default ProfileOverview;