//components
import DevlogForm from "../components/DevlogForm";
import "bootstrap/dist/css/bootstrap.css";

const AddDevlog = () => {
  return (
    
    <section
  style={{
    backgroundColor: "#002b5b",
    position: "relative",
    marginTop: "%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  }}
>
  <div
    className="container border w-50 mt-5 p-5 rounded-4"
    style={{ backgroundColor: "#ACDBDF" }}
  >
    <div className="form-card">
      <h2 className="text-center mb-5" style={{ color: "#002B5B" }}>
        Add New Devlog
      </h2>
      <DevlogForm />
    </div>
  </div>
</section>
 
  );
};

export default AddDevlog;
