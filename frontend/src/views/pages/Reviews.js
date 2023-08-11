import "bootstrap/dist/css/bootstrap.css";
import icon from "../../images/star-fill.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons/faStar";
import ReviewModal from "../components/ReviewModal";
import { useEffect, useState } from "react";

const Review = () => {
  const elements = [];
  for (let i = 0; i < 5; i++) {
    elements.push(
      <img
        src={icon}
        class="img-fluid"
        style={{
          width: "24px",
          height: "20px",
          filter: "brightness(0.5) saturate(2)",
        }}
        alt="Icon"
      />
    );
  }
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //backend
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("/algorithmia/reviews");
      const json = await response.json();

      if (response.ok) {
        setReviews(json);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section
      class="p-4 p-md-5 text-center text-lg-start shadow-1-strong"
      style={{ backgroundColor: "#002b5b" }}
    >
      <div className="text-center" style={{color:"white"}}>
        <h1>Reviews</h1>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              style={{
                backgroundColor: "#1a5f7a",
                color: "white",
                borderColor: "#1a5f7a",
              }}
              onClick={handleShowModal}
            >
              Add Review
            </button>
          </div>

          <br></br>
          <br></br>

          {reviews &&
            reviews.map((review) => (
              <React.Fragment>
                <div className="card" style={{backgroundColor:"#acdbdf"}}>
                  <div className="card-body m-3">
                    <div className="row">
                      <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          className="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="150"
                          height="150"
                        />
                      </div>
                      <div className="col-lg-8">
  
                        <p className="fw-bold lead mb-2">
                          <strong>Anna Smith</strong>
                          <br></br>
                          {[...Array(review.rate)].map((_, index) => (
                            <FontAwesomeIcon
                              icon={solidStar}
                              style={{ color: "#b78700" }}
                            />
                          ))}
                          {[...Array(5 - review.rate)].map((_, index) => (
                            <FontAwesomeIcon
                              icon={regularStar}
                              style={{ color: "#b78700" }}
                            />
                          ))}
                        </p><br/>
                        <p className="mb-4">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </React.Fragment>
            ))}

          <br></br>
          <br></br>
        </div>
      </div>
      <ReviewModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </section>
  );
};

export default Review;
