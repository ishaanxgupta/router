
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

 const router = createBrowserRouter([
  {
     path: '/',
     element: <Layout/>,
     children: [
      {
         path: "",
         element: <Home />
       },
       {
        path: "about",
        element: <About />
      },
     {
       path: "user/:userid",
       element: <User />
     },
     {
      path: "github",
      element: <Github />
    },
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)