import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LayoutMenu from './pages/layoutMenu';
import Budget from './pages/budget'
import SplitBill from './pages/splitBill/splitBill';
import SplitBillSession from './pages/splitBill/splitBillSession';
import SplitBillCode from './pages/splitBill/splitBillCode';
import ReserveMoney from'./pages/reserveMoney';
import SplittBillSessionPay from './pages/splitBill/splitBillSessionPay';
import Login from './pages/login'

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
        path: "splitbill/session/code",
        element: <SplitBillCode/>
      },
      {
        path: "splitbill/session",
        element: <SplitBillSession/>
      },
      {
        path: "splitbill/session/pay",
        element: <SplittBillSessionPay/>
      },
      {
        path: "budget/reserve-service",
        element: <ReserveMoney/>
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
