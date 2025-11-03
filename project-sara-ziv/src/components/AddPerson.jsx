// import React, { useState } from "react";

// function AddPerson({ addPerson }) {
//   const [user, setUser] = useState("");
//   const handleAddPerson = () => {
//     const score = JSON.parse(localStorage.getItem("score")) || {};

//     if (!(user in score)) {
//       score[user] = [];
//       localStorage.setItem("score", JSON.stringify(score));
//     }
//     addPerson({
//       user: user,
//       score: [JSON.parse(localStorage.getItem("score"))[user]],
//       status: false,
//     });
//     setUser("");
//   };
//   function displayAddPerson() {
//     return (
//       <div id="addPersonContainer">
//         <label>User:</label>
//         <input
//           type="text"
//           //   user: {user}
//           value={user}
//           onChange={(e) => setUser(e.target.value)}
//           required
//         />
//         <button disabled={!user} onClick={handleAddPerson}>
//           Add
//         </button>
//       </div>
//     );
//   }
//   return <>{displayAddPerson()}</>;
// }

// export default AddPerson;
