import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Animes from "./routes/animes";
import { RegisterLoginUser } from './routes/register-login-User';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "animes/",
        element: <Animes />,
      },
      {
        path: "",
        element: < Home/>,
      },
    ],
  },
  {
    path: "/enter",
    element: <RegisterLoginUser />,
  },

  

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
