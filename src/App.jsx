import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/appLayout/Layout/Layout";
import UsersPage from "./components/pageViews/UsersPage/UsersPage";
import HomePage from "./components/pageViews/HomePage/HomePage";
import AlbumsPage from "./components/pageViews/AlbumsPage/AlbumsPage";
import PhotosPage from "./components/pageViews/PhotosPage/PhotosPage";

const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

const fetchAlbums = ({params}) => {
  const {userId} = params
  return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
  .then((response) => response.json())

}

const fetchPhotos = ({params}) => {
  const {albumId} = params
  return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  .then((response) => response.json())

}

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "users",
        Component: UsersPage,
        loader: fetchUsers
      },
      {
        path: "users/:userId",
        Component: AlbumsPage,
        loader: fetchAlbums
      },
      {
        path: "users/:userId/:albumId",
        Component: PhotosPage,
        loader: fetchPhotos
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
