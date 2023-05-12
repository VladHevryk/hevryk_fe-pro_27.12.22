import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import style from "./PhotosPage.module.scss";

function PhotosPage() {
  const { albumId } = useParams();

  const photos = useLoaderData();

  return (
    <>
      <ul className={style.photo}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <li className={style.photo_list}>
              <img className={style.photo_img} src={photo.url} />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default PhotosPage;

