import React, { useState, Fragment } from "react";

import InputForm from "./Components/UserInputs/InputForm";
import User from "./Components/UserData/User";
import Card from "./Components/UI/Card/Card";

const Dummy_Data = [
  { name: "Abhi", age: 21, id: "u1" },
  { name: "Sona", age: 22, id: "u2" },
];

function App() {
  const [userData, setUserData] = useState(Dummy_Data);

  const saveUserDataHandler = (uName, uAge) => {
    setUserData((prevUser) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevUser,
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUserData((prevUser) => {
      const updatedUser = prevUser.filter((user) => user.id !== userId);
      return updatedUser;
    });
  };

  return (
    <Fragment>
      <InputForm onSaveUserData={saveUserDataHandler} />
      <Card>
        <User user={userData} onDeleteUser={deleteUserHandler} />
      </Card>
    </Fragment>
  );
}

export default App;
