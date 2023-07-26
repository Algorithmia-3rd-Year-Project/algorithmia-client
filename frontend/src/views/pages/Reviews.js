import 'bootstrap/dist/css/bootstrap.css';
import icon from "../../images/star-solid.png"
import ReviewModal from '../components/ReviewModal'; 
import { useState } from "react";


const Review = () => {
    const elements = [];
    for (let i = 0; i < 5; i++) {
        elements.push(<img src={icon} class="img-fluid" style={{width: '24px', height: '20px', filter: "brightness(0.5) saturate(2)"}} alt="Icon" />
        );
    }
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    return(
        <section class="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"  style={{backgroundColor: "#acdbdf"}}>
            <div className='text-center'>
            <h1>Reviews</h1>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-10">

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" style={{ backgroundColor: '#002b5b', color: 'white', borderColor: '#002b5b' }} onClick={handleShowModal}>
                        Add Review
                    </button>
                </div>

                <br></br><br></br>

                <div class="card">
                    <div class="card-body m-3">
                    <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                            class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                        </div>
                        <div class="col-lg-8">
                        <p class="text-muted fw-light mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                            molestiae numquam quas, voluptates omnis nulla ea odio quia similique
                            corrupti magnam.
                        </p>
                        <p class="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                        {elements}
                        </div>
                    </div>
                    </div>
                </div>

                <br></br><br></br>

                <div class="card">
                    <div class="card-body m-3">
                    <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                            class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                        </div>
                        <div class="col-lg-8">
                        <p class="text-muted fw-light mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                            molestiae numquam quas, voluptates omnis nulla ea odio quia similique
                            corrupti magnam.
                        </p>
                        <p class="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                        {elements}
                        </div>
                    </div>
                    </div>
                </div>

                <br></br><br></br>

                <div class="card">
                    <div class="card-body m-3">
                    <div class="row">
                        <div class="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                            class="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
                        </div>
                        <div class="col-lg-8">
                        <p class="text-muted fw-light mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                            molestiae numquam quas, voluptates omnis nulla ea odio quia similique
                            corrupti magnam.
                        </p>
                        <p class="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                        {elements}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <ReviewModal showModal={showModal} handleCloseModal={handleCloseModal} />

        </section>
    );
};

export default Review;