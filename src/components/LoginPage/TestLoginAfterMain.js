// import React, { useEffect } from "react";
// import { Navigate } from "react-router";

// import fbase from "../../fbase";
// function TestLoginAfterMain(props) {

//   return (
//     <div>
//       <h3>Hello~</h3>
//     </div>
//   );
// }

// export default TestLoginAfin;

import { getAuth } from "firebase/auth";
import React from "react";

import fbase from "../../fbase";

function TestLoginAfterMain() {
  const handleLogout = () => {
    fbase.auth().signOut();
    alert("로그아웃되었습니다.");
  };
  return (
    <div>
      <h1>hello??</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
export default TestLoginAfterMain;
