import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingIn from './rotes/singIn.jsx';
import SingUp from './rotes/singUp.jsx';
import Error from './rotes/error.jsx';
import Home from './rotes/home.jsx';
import Voos from './rotes/voos/voos.jsx';
import Hosp from './rotes/hosp/hosp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "in", element: <SingIn /> },
      { path: "up", element: <SingUp /> },
      { path: "voos", element: <Voos /> },
      { path: "hos", element: <Hosp /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)
