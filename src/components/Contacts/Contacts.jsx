import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import axios from "axios";
import Input from "../Input/Input";
import Btn from "../btn/Btn";

function Contacts() {
  const [users, setUsers] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const nandleCloseForm = (item) => {
    setOpenForm(item)
  }

  const handelBtnChange = () => {
    return openForm === true ? "close form creator" : "create new contact";
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  const addName = (name) => {
    setUsers((prevState) => [...prevState, name]);
  };

  const handelDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <Table onlDelete={handelDelete} users={users} />
      <Btn
        onClick={handleOpenForm}
        className={`btn btn-${openForm === true ? "danger" : "info"} btn-lg`}
        title={handelBtnChange()}
      />
      <Input onAddName={addName} openForm={openForm} onCloseForm={nandleCloseForm}/>
    </div>
  );
}

export default Contacts;
