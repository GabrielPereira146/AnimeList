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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        path: "home/",
        element: < Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <RegisterLoginUser />,
  },



]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
)
