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
  const [filteredComplaints, setfilteredComplaints] = useState([]);
  const [filter, setFilter] = useState('unread');
  const [readFlag, setreadFlag] = useState();
  const [UnreadFlag, UnsetreadFlag] = useState();

  function radioBtnChange(e){

    setFilter(e.target.value);
    
    const CDElements = document.querySelectorAll('[id^="CD"]');
    const CTElements = document.querySelectorAll('[id^="CT"]');

    var value = e.target.value;
   //console.log(CTElements)

    CDElements.forEach((element) => {
      if (value === 'unread') {
        
        element.style.display = 'none';
      } else if (value === 'read') {
        
        element.style.display = 'none';
      } else if (value === 'all') {
        
        element.style.display = 'none';
      }
    });

    CTElements.forEach((element) => {
      element.style.transform = 'rotate(0deg)';
    });
  } 
   
  function statusRead(e){
    
    e.preventDefault();
    const newState = "read"
    const id = e.target.value

    
    const data = {
      id: id,
      newState: newState,
    };
    
    fetch('/complaints/readcomplainlist', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) =>
         response.json())  
    .then((result) => {
     
      const randomValue = new Date().getTime();

      setreadFlag(randomValue);
      console.log(result._id);
     
    })
    .catch((error) => {
     
      console.error('Error:', error);
    });

  }

  function statusUnRead(e){
      
    e.preventDefault();
    
    const newState = "unread"
    const id = e.target.value

    const data = {
      id: id,
      newState: newState,
    };
      
    fetch('/complaints/unreadcomplainlist', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    .then((response) =>
         response.json())  
    .then((result) => {

      const randomValue = new Date().getTime();
      
      UnsetreadFlag(randomValue);
      console.log(result._id);
      
    })
    .catch((error) => {
     
      console.error('Error:', error);
    });
    
  }
  

 useEffect(() => {
  fetch('/complaints/complainlist')
    .then(response => response.json())
    .then(data => {

      const modifiedData = data.map(complaint => {
        const [datePart, timePart] = complaint.date.split('T');
        return {
          ...complaint,
          date: datePart,
          time: timePart
        };
      })
      
      setComplaints(modifiedData);
        
      
      
      const filteredComplaints = modifiedData.filter(complaint => {
        if (filter === 'unread') {

          return complaint.status === 'unread';
        } else if (filter === 'read') {
          
          return complaint.status === 'read';
        }
        return true; // Return all complaints for 'all' filter
      })

      setfilteredComplaints(filteredComplaints);
      console.log(filteredComplaints); 
       
    })
    .catch(error => {
      console.error('Error while fetching complaints:', error);
    });
   }, [filter, readFlag, UnreadFlag]);


    return(
     <>
  

      <div className="container mt-5">
        <div id="wrapper" className="bg-secondary p-4 rounded wrapper">
          <h2 id="topic" className="text-white font-weight-bold">
            Complaints
          </h2>
          <div id="complain" className="bg-light p-3 rounded complain">

            {filteredComplaints.map((complaints, index) => (

      
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
                  
                  {complaints.status === 'unread' && (
                    <button id="readBtn" onClick={statusRead} value={complaints._id}>
                       read
                    </button>
                  )}
                  {complaints.status === 'read' && (
                    <button id="unread" onClick={statusUnRead} value={complaints._id}>
                       unread
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="radioBtn mt-3">
            <input type="radio" id="new" defaultChecked  name="complaintFilter" onChange={radioBtnChange} value='unread'/>
              <label>New</label>
            <input type="radio" id="read" name="complaintFilter" onChange={radioBtnChange} value='read'/>
              <label>Read</label>
            <input type="radio" id="all" name="complaintFilter" onChange={radioBtnChange} value='all'/>
              <label>All</label>   
          </div>
        </div>
      </div>

     </>
    )
}

export default Complains;