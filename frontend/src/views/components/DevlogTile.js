const DevlogTile = ({ devlog }) => {
  return (
    <div className="devlog-details">
      <h3>{devlog.title}</h3>
      <p>{devlog.type}</p>
    </div>
  );
};

export default DevlogTile;

// import icon from "../../images/user.png";

// import { Link } from "react-router-dom";

// const DevlogTile = ({ devlog }) => {
//   return (
//     <div className="devlog-details">
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-6 mb-4">
//             <div class="card text-center" style={{ width: 350 }}>
//               <img class="card-img-top" src={icon} alt=".." height="300"/>
//               <div class="card-body">
//                 <h5 class="card-title">{devlog.title}</h5>
//                 <p class="card-text">
//                   {devlog.type}
//                 </p>
//                 <Link to="/devlogsingle"><a href="" class="btn btn-primary btn-sm">View More</a></Link>
//                 <div class="card-footer text-muted">35 comments</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevlogTile;
