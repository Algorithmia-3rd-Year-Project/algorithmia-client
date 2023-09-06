import React, { useState, useEffect } from 'react';
import '../../Assets/css/complaints.css';
import 'bootstrap/dist/css/bootstrap.css';


function Dropdown(event){
  var BtnId = event.target.id
  var DropDwnBtn = document.getElementById(BtnId);
  var numPart = BtnId.match(/\d+/)[0];
   
  var complain_discription = document.getElementById('CD'+numPart)
  var computedStyle = getComputedStyle(complain_discription);
  var check = computedStyle.getPropertyValue('display');

  if(check === 'none'){
    complain_discription.style.display = 'block';
    complain_discription.style.height  = '15%';
    DropDwnBtn.style.transform = 'rotate(-180deg)'; 
  }else{
    complain_discription.style.display = 'none';
    complain_discription.style.height  = '0';
    DropDwnBtn.style.transform = 'rotate(0deg)'; 
  }
}


function Complains() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch('/algorithmia/complainlist')
      .then(response => response.json())
      .then(data => {
        setComplaints(data);
      })
      .catch(error => {
        console.error('Error while fetching complaints:', error);
      });
  }, []);


    return(
     <>
  {/* <div className="container mt-5">
   <div id="wrapper" className="bg-secondary p-4 rounded wrapper">
    <h2 id="topic" className="text-white font-weight-bold">Complaints</h2>
    <div id="complain" className="bg-light p-3 rounded complain">
      
    <div className="card mb-3">
      <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
       <h5 className="m-0">Adam <span className="complainDate">22/12/2020</span></h5>
       <button className="DropDownBtn complainTopicBtn" id="CT0" onClick={Dropdown}></button>
      </div>
      <div id="CD0" className="collapse">
       <div className="card-body">
       <p>hello complain1</p>
      </div>
     </div>
   </div>

   <div className="card mb-3">
      <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
       <h5 className="m-0">Adam <span className="complainDate">22/12/2020</span></h5>
       <button className="DropDownBtn complainTopicBtn" id="CT1" onClick={Dropdown}></button>
      </div>
      <div id="CD1" className="collapse">
       <div className="card-body">
       <p>hello complain2</p>
      </div>
     </div>
   </div>

    </div>
  </div>
</div> */}

<div className="container mt-5">
        <div id="wrapper" className="bg-secondary p-4 rounded wrapper">
          <h2 id="topic" className="text-white font-weight-bold">
            Complaints
          </h2>
          <div id="complain" className="bg-light p-3 rounded complain">

            {complaints.map((complaints, index) => (
              
              <div className="card mb-3" key={index}>
                <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                  <h5 className="m-0">
                    {complaints.name}{' '}
                    <span className="complainDate">{complaints.date}</span>
                  </h5>
                  <button
                    className="DropDownBtn complainTopicBtn"
                    id={`CT${index}`}
                    onClick={Dropdown}
                  ></button>
                </div>
                <div id={`CD${index}`} className="collapse">
                  <div className="card-body">
                    <p>{complaints.complain}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     </>
    )
}

export default Complains;