
const AdvertiserDashboard = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Total Advertisements</h3>
            <p>84</p>
          </div>
          <div className="col">
            <ul>
              <li>
                Pending - <span>10</span>
              </li>
              <li>
                Approved - <span>07</span>
              </li>
              <li>
                Ongoing - <span>02</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Total Revenue</h3>
            <p>10K</p>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <div className="row">
              <h3>Ongoing Advertisements</h3>
            </div>
            <div className="row">
              <table className="table table-primary table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Ends In</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-auto">
            <div className="row">
              <h3>Approved Advertisements</h3>
            </div>
            <div className="row">
              <table className="table table-primary table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Starts In</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <div className="row">
              <h3>Pending Requests</h3>
            </div>
            <div className="row">
              <table className="table table-primary table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="row">Filters</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserDashboard;
