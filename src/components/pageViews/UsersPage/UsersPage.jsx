import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function UsersPage() {
  const users = useLoaderData();

  return (
    <>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>{user.username}</li>
            <Link to={`/users/${user.id}`}>
              <button>Show Albums</button>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
}

export default UsersPage;

