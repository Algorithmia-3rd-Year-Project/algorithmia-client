import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import img1 from "../../images/patch1.jpg"
import img2 from "../../images/patch2.png"
import img3 from "../../images/patch3.jpg"
import icon from "../../images/star-fill.png";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from "react";

const Home = () => {

  const elements = [];
    for (let i = 0; i < 5; i++) {
        elements.push(<img src={icon} class="img-fluid" style={{width: '24px', height: '20px', filter: "brightness(0.5) saturate(2)"}} alt="Icon" />
        );
    }
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
      const fetchReviews = async () => {
        const response = await fetch("/algorithmia/reviews");
        const json = await response.json();
  
        if (response.ok) {
          // Sort the reviews by date in descending order
          const sortedReviews = json.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
  
          // Take only the first 3 reviews
          const latestReviews = sortedReviews.slice(0, 3);
  
          setReviews(latestReviews);
        }
      };
  
      fetchReviews();
    }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      <p>Other Pages</p>
      <Link to="/devlogs">See all devlogs</Link>
      <section style={{backgroundColor: "#002b5b"}}>
      <div className="container-fluid vh-100">
        <div className="row align-items-center vh-100" style={{ backgroundImage: `url(${require('../../images/background_img.jpg')})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#002b5b", borderColor: "white"}}>
          <div className="col-md-6 offset-md-3 text-center p-5 my-5">
            <h1 className="display-4 fw-bold lh-1" style={{ fontSize: '150px', color: 'white', WebkitTextStroke: "5px #002b5b", textStroke: "5px #002b5b" }}>Algorithmia</h1>
            <p className="lead fw-bold text-white"  style={{ fontSize: '40px', WebkitTextStroke: "2px #002b5b", textStroke: "2px #002b5b"}}> 
              Embark on an exciting educational adventure with DSA Quest, the ultimate game that turns
              learning Data Structures and Algorithms (DSA) into an immersive and enjoyable experience!
            </p>
          </div>
        </div>
      </div>

      <div class="container my-5">
      <h1 class="display-5 fw-bold lh-1 mb-3 text-center" style={{ color: 'white' }}>About Us</h1>
        <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 text-center" style={{ backgroundColor: '#002b5b' , color: 'white'}}>
          <div class=" p-5 p-lg-5 pt-lg-3">
            <p class="lead">
              Embark on an exciting educational adventure with DSA Quest, the ultimate 
              game that turns learning Data Structures and Algorithms (DSA) into an immersive 
              and enjoyable experience!. Dive into a captivating virtual world where you'll 
              unravel the secrets of DSA through thrilling challenges, mind-bending puzzles, and strategic gameplay.
            </p>
            <br></br><br></br>
            <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" style={{ backgroundColor: 'white' , color: '#002b5b', borderColor: "#002b5b"}}>Download</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4" style={{ borderColor: 'white',color: 'white'}}>Download</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5 border-top">
        <br></br><br></br>
      <h1 class="display-5 fw-bold lh-1 mb-3 text-center" style={{ color: 'white' }}>Patch Highlights</h1>
        <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 mx-5" style={{ backgroundColor: '#002b5b' , color: 'white'}}>
          <div class="col-lg-7 p-5 p-lg-5 pt-lg-3">
            <p class="lead mx-5">
              Added a new interactive visualization mode for sorting algorithms, allowing players to 
              visually understand the step-by-step process of popular sorting techniques like bubble sort, 
              merge sort, and quicksort.
            </p>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden mx-5">
              <img class="img-fluid border rounded-3 mb-4" src={img1} alt="" width="720"/>
          </div>
        </div>
      </div>

      <div class="container my-5 border-top">
        <br></br><br></br>
            <h1 class="display-5 fw-bold lh-1 mb-3 text-center" style={{color: "white"}}>Game Features</h1>
              <div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 mx-5">
              <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" style={{ backgroundColor: 'white' , color: '#002b5b', borderColor: "#002b5b"}}>News</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4" style={{ borderColor: 'white',color: 'white'}}>Features</button>
              </div>        
              </div>
              <br></br><br></br>
              <div class="container">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="couple"/>
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="dog"/>
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="family"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

{/* reviews */}
<div className="container my-5 border-top">
        <br></br>
        <br></br>
        <h1 className="display-5 fw-bold lh-1 mb-3 text-center" style={{ color: "white" }}>Reviews</h1>
        <Link to="/reviews">See More</Link>
        <br></br><br></br><br></br>
        <div className="container">
          <div id="carouselReviewIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselReviewIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselReviewIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselReviewIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              {reviews &&
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="card"  style={{backgroundColor: "#acdbdf"}}>
                      <div className="card-body m-3">
                        <div className="row">
                          <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                              className="rounded-circle img-fluid shadow-1"
                              alt="woman avatar"
                              width="200"
                              height="200"
                            />
                          </div>
                          <div className="col-lg-8">
                            <p className="text-muted fw-light mb-4">
                              {review.content}
                            </p>
                            <p className="fw-bold lead mb-2">
                              <strong>Anna Smith</strong>
                              <br></br>
                              {[...Array(review.rate)].map((_, index) => (
                                <FontAwesomeIcon
                                  key={index}
                                  icon={solidStar}
                                  style={{ color: "gold" }}
                                />
                              ))}
                              {[...Array(5 - review.rate)].map((_, index) => (
                                <FontAwesomeIcon
                                  key={index}
                                  icon={regularStar}
                                  style={{ color: "gold" }}
                                />
                              ))}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselReviewIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselReviewIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />

      
      </section>

  {/* footer */}
  <section style={{backgroundColor: "#acdbdf"}}>
  <div class="container-fluid my-5">
    <div class="row p-4 pb-0 align-items-center rounded-3 text-center mx-5">
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5 style={{fontSize: "25px"}}>Section</h5>
              <ul class="nav flex-column" style={{fontSize: "20px"}}>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5 style={{fontSize: "25px"}}>Section</h5>
              <ul class="nav flex-column" style={{fontSize: "20px"}}>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5 style={{fontSize: "25px"}}>Section</h5>
              <ul class="nav flex-column" style={{fontSize: "20px"}}>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 style={{fontSize: "25px"}}>Subscribe to our newsletter</h5>
                <p style={{fontSize: "20px"}}>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                  <button class="btn btn-primary" type="button" style={{ backgroundColor: '#002b5b' , color: 'white', borderColor: "#002b5b", fontSize: "20px"}}>Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p style={{fontSize: "20px"}}>© 2023 Company, Inc. All rights reserved.</p>
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
  </section>  

</div>
    
  );
};

export default Home;
