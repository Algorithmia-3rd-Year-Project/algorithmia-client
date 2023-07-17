//components
import DevlogForm from "../components/DevlogForm";
import 'bootstrap/dist/css/bootstrap.css';


const AddDevlog = () => {
  return (
    <>
    <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card"
                style={{
                padding: '30px 40px',
                marginTop: '60px',
                marginBottom: '60px',
                border: 'none !important',
                boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
            }}>
            <div className="form-card">
              <h2 class="text-center mb-4">Add New Devlog</h2>
              <DevlogForm />
            </div>
          </div>
      </div>
      
      </div>
    </div>
    </>
    
  );
};

export default AddDevlog;
