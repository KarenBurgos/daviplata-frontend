import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LayoutMenu from './pages/layoutMenu';
import Budget from './pages/budget'
import SplitBill from './pages/splitBill';
import SplitBillSession from './pages/splitBillSession';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <LayoutMenu />,
    children: [
      {
        path: "/",
        element: <Budget/>
      },
      {
        path: "splitbill",
        element: <SplitBill/>
      },
      {
        path: "splitbill/session",
        element: <SplitBillSession/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
