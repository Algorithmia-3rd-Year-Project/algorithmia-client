import image from "../../images/devlog.jpg";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CommentBlock = ({ comment }) => {
  return (
    <div className="d-flex flex-start w-75 mt-5">
      <img
        className="rounded-circle shadow-1-strong me-3"
        src={image}
        alt="avatar"
        width="65"
        height="65"
      />
      <div className="flex-grow-1 flex-shrink-1">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1">
              Maria Smantha <span className="small">- 2 hours ago</span>
            </p>
          </div>
          <p className="small mb-0">
            {comment.content}It is a long established fact that a reader will be
            distracted by the readable content of a page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentBlock;
