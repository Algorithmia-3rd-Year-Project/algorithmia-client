import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <p>Other Pages</p>
      <Link to="/devlogs">See all devlogs</Link>

  <div class="container-fluid my-5">
    <div class="row p-5 pb-0 align-items-center rounded-3 border text-center mx-5">
      <div class="container-fluid my-5">
        <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border text-center mx-5 bg-success">
          <div class=" p-5 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Algorithmia</h1>
            <p class="lead mx-5">
              Embark on an exciting educational adventure with DSA Quest, the ultimate game that turns
              learning Data Structures and Algorithms (DSA) into an immersive and enjoyable experience!
            </p>
          </div>
        </div>
      </div>

      <div class="container my-5">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">About</h1>
        <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border text-center mx-5">
          <div class=" p-5 p-lg-5 pt-lg-3">
            <p class="lead mx-5">
              Embark on an exciting educational adventure with DSA Quest, the ultimate 
              game that turns learning Data Structures and Algorithms (DSA) into an immersive 
              and enjoyable experience!. Dive into a captivating virtual world where you'll 
              unravel the secrets of DSA through thrilling challenges, mind-bending puzzles, and strategic gameplay.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Download</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Download</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">Patch Highlights</h1>
        <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border mx-5">
          <div class="col-lg-7 p-5 p-lg-5 pt-lg-3">
            <p class="lead mx-5">
              Added a new interactive visualization mode for sorting algorithms, allowing players to 
              visually understand the step-by-step process of popular sorting techniques like bubble sort, 
              merge sort, and quicksort.
            </p>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden mx-5">
              <img class="images/patch1.jpg" src="bootstrap-docs.png" alt="" width="720"/>
          </div>
        </div>
      </div>

      <div class="container my-5">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center">Game Features</h1>
        <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border mx-5">
        <div class="container px-5 text-center">
          <img src="bootstrap-docs.png" class="img-fluid border rounded-3 mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
        </div>
            <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">News</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
            </div>
        </div>
      </div>
    </div>
  </div>

  {/* footer */}
  <div class="container-fluid my-5">
    <div class="row p-4 pb-0 align-items-center rounded-3 border text-center mx-5">
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  </div>
      
    </div>
  );
};

export default Home;
