import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
   const [users, setUsers] = useState([]);

   const addUserHandler = (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
   };

   return (
      <Fragment>
         <AddUser onAddUser={addUserHandler} />
         <UsersList users={users} />
      </Fragment>
   );
}

export default App;
