import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

function AlbumsPage() {
  const { userId } = useParams();

  const albums = useLoaderData();

  return (
    <>
      <ul>
        {albums.map((album) => (
          <div key={album.id}>
            <li>{album.title}</li>
            <Link to={`/users/${userId}/${album.id}`}>
              <button>show</button>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
}

export default AlbumsPage;


