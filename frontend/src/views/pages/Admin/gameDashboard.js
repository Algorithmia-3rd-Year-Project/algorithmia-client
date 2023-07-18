import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../../../assets/css/gameDashboard.css";


const GameDashboard = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row" style={{marginTop:'60px'}}>
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-cherry">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-download"></i>
                                </div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Total Downloads</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            3,243
                                        </h2>
                                    </div>
                                    <div class="col-4 text-right">
                                        <span>12.5% <i class="fa fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div class="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                                    <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-blue-dark">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas fa-eye"></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Total Views</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            15.07k
                                        </h2>
                                    </div>
                                    <div class="col-4 text-right">
                                        <span>9.23% <i class="fa fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div class="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                                    <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-4 col-lg-6">
                        <div class="card l-bg-green-dark">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Total Revenue</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">
                                            $11.61k
                                        </h2>
                                    </div>
                                    <div class="col-4 text-right">
                                        <span>2.5% <i class="fa fa-arrow-up"></i></span>
                                    </div>
                                </div>
                                <div class="progress mt-1 " data-height="8" style={{height: '8px'}}>
                                    <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div class="card text-white bg-secondary mb-2" style={{ maxWidth: '25rem', marginLeft: '175px' }}>
                        <div className="col">
                            <h3 class="card-header">Stickiness Rate</h3>
                            <div class="card-body">
                                <h4 class="card-title" style={{ textAlign: 'center' }}>24%</h4>
                            </div>
                        </div>
                    </div>

                    <div class="card text-white bg-secondary mb-2" style={{ maxWidth: '25rem', marginLeft: '100px' }}>
                        <div className="col">
                            <h3 class="card-header">Retention Rate</h3>
                            <div class="card-body">
                                <h4 class="card-title" style={{ textAlign: 'center' }}>35%</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDashboard;
