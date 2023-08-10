import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../../Assets/css/gameDashboard.css";
import BarChart from "../../components/BarCharts";
import { UserData } from "../../../Data";
import React, { useState } from "react";

const GameDashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="home" style={{ background: "#002B5B" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20px", color: "white" }}>
        Game Dashboard
      </h1>
      <div className="container">
        <div className="row" style={{ marginTop: "50px" }}>
          <div class="col-xl-4 col-lg-6">
            <div class="card l-bg-green">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-download"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Downloads</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">3,243</h2>
                  </div>
                  <div class="col-4 text-right">
                    <span>
                      12.5% <i class="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  class="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    class="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-6">
            <div class="card l-bg-green">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-eye"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Views</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">15.07k</h2>
                  </div>
                  <div class="col-4 text-right">
                    <span>
                      9.23% <i class="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  class="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    class="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-6">
            <div class="card l-bg-green">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Revenue</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">$11.61k</h2>
                  </div>
                  <div class="col-4 text-right">
                    <span>
                      2.5% <i class="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  class="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    class="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            class="d-inline p-2 "
            style={{
              width: "600px",
              borderRadius: "20px",
              marginLeft: "40px",
              background: "#ACDBDF",
            }}
          >
            <div class="rounded">
              <div class="w-100 p-3">
                <BarChart chartData={userData} />
              </div>
            </div>
            <h2 class="blockquote text-center">Daily Downloads</h2>
          </div>

          <div
            class="d-inline p-2"
            style={{
              width: "600px",
              borderRadius: "20px",
              marginLeft: "40px",
              background: "#ACDBDF",
            }}
          >
            <div class="rounded">
              <div class="w-100 p-3">
                <BarChart chartData={userData} />
              </div>
            </div>
            <h2 class="blockquote text-center">Daily Views</h2>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div
            class="d-inline p-2"
            style={{
              width: "600px",
              borderRadius: "20px",
              marginLeft: "40px",
              background: "#ACDBDF",
            }}
          >
            <div class="rounded">
              <div class="w-100 p-3">
                <BarChart chartData={userData} />
              </div>
            </div>
            <h2 class="blockquote text-center">Daily Active Users</h2>
          </div>

          <div
            class="d-inline p-2 "
            style={{
              width: "600px",
              borderRadius: "20px",
              marginLeft: "40px",
              background: "#ACDBDF",
            }}
          >
            <div class="rounded">
              <div class="w-100 p-3">
                <BarChart chartData={userData} />
              </div>
            </div>
            <h2 class="blockquote text-center">Monthly Active Users</h2>
          </div>
        </div>

        <div className="row" style={{ marginTop: "30px" }}>
          <div
            class="col-xl-4 col-lg-6"
            style={{ maxWidth: "100rem", marginLeft: "125px" }}
          >
            <div class="card l-bg-green">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-tape"></i>
                </div>
                <div class="mb-4">
                  <h4 class="card-title mb-0">Stickiness Rate</h4>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">34%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="card text-white bg-secondary mb-2" style={{ maxWidth: '25rem', marginLeft: '175px' }}>
                        <div className="col">
                            <h3 class="card-header">Stickiness Rate</h3>
                            <div class="card-body">
                                <h4 class="card-title" style={{ textAlign: 'center' }}>24%</h4>
                            </div>
                        </div>
                    </div> */}

          {/* <div class="card text-white bg-secondary mb-2" style={{ maxWidth: '25rem', marginLeft: '100px' }}>
                        <div className="col">
                            <h3 class="card-header">Retention Rate</h3>
                            <div class="card-body">
                                <h4 class="card-title" style={{ textAlign: 'center' }}>35%</h4>
                            </div>
                        </div>
                    </div> */}

          <div
            class="col-xl-4 col-lg-6"
            style={{ maxWidth: "40rem", marginLeft: "185px" }}
          >
            <div class="card l-bg-green">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-chart-line"></i>
                </div>
                <div class="mb-4">
                  <h4 class="card-title mb-0">Retention Rate</h4>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">26%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
