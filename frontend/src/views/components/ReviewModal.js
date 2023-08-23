import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useSessionContext } from "../../hooks/useSessionContext";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className="cursor-pointer"
          icon={idx <= rating ? solidStar : regularStar} 
          onClick={() => onRating(idx)}
          style={{ color: "#b78700" }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);
  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#f5eb3b",
  },
};

const ReviewModal = ({ showModal, handleCloseModal }) => {
  const modalStyle = {
    display: showModal ? "block" : "none",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  const modalContentStyle = {
    backgroundColor: "#fefefe",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
  };

  //backend
  const { user } = useSessionContext();
  const name = user.email;
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    const review = { name, content, rate: rating }; // Use rating as the selected rate

    const response = await fetch("/algorithmia/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setContent("");
      setRating(0);
      setError(null);
      console.log("New Review added", json);
      handleCloseModal();
    }
  };

  const [rating, setRating] = useState(0);

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal" style={modalStyle}>
        <div className="modal-dialog" style={modalContentStyle} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Review</h5>
              <button
                type="button"
                className="close"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <textarea
                placeholder="Add your review..."
                style={{
                  border: "None",
                  width: "100%",
                }}
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />

              <label>Rate</label>

              <div className="row">
                <div className="col text-center">
                  <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                  <p>Rating - {rating}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#002b5b",
                  color: "white",
                  borderColor: "#002b5b",
                }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <div className="error"> {error} </div>}
    </form>
  );
};

export default ReviewModal;
