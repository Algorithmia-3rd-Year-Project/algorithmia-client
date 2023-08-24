//components
import DevlogForm from "../components/DevlogForm";
import "bootstrap/dist/css/bootstrap.css";

const AddDevlog = () => {
  return (
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
  );
};

export default AddDevlog;
