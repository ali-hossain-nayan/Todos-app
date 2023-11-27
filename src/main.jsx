import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Profile from "./components/Profile/Profile.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/to-do-list" element={<TodoList />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Auth0Provider
      domain="dev-6d6bk0u8hruja1pf.us.auth0.com"
      clientId="DB0kDjVOeYl92WATss93CgyrXcjswlqb"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  
);
