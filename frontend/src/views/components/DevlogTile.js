const DevlogTile = ({ devlog }) => {
  return (
    <div className="devlog-details">
      <h3>{devlog.title}</h3>
      <p>{devlog.type}</p>
    </div>
  );
};

export default DevlogTile;


{/* <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div> */}

          // <div class="col-lg-4 d-none d-lg-block">
          //   <div class="card">
          //     <img
          //       src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
          //       class="card-img-top"
          //       alt="Sunset over the Sea"
          //     />
          //     <div class="card-body">
          //       <h5 class="card-title">Card title</h5>
          //       <p class="card-text">
          //         Some quick example text to build on the card title and make up the bulk
          //         of the card's content.
          //       </p>
          //       <a href="#!" class="btn btn-primary">Button</a>
          //     </div>
          //   </div>