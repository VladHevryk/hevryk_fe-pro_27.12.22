import React from "react";
import Btn from "../btn/Btn";

function Table({ users, onlDelete }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.phone}</td>
              <td>
                <Btn
                  onClick={() => onlDelete(el.id)}
                  title={"delete"}
                  className="btn btn-outline-danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// item.split(" ")[0]
