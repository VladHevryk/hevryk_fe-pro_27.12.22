import React, { useState } from "react";

function Input({ onAddName, openForm, onCloseForm }) {
  const [data, setData] = useState({ name: "", phone: "" });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  

  const handelFormSubmit = (e) => {
    e.preventDefault();
    onAddName({
      name: data.name,
      phone: data.phone,
      id: Date.now(),
    });
    setData({ name: "", phone: "" })
    onCloseForm(!openForm);
  };

  return (
    <div>
      {openForm && (
        <form className="mt-4" onSubmit={handelFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Enter Phone
            </label>
            <input
              type="text"
              id="phone"
              className="form-control"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Enter Surname"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Input;
