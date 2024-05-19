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
import AddService from './pages/addService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { 
    path: "/usuario",
    element: <LayoutMenu />,
    children: [
      {
        path: "/usuario",
        element: <Budget/>
      },
      {
        path: "/usuario/splitbill",
        element: <SplitBill/>
      },
      {
        path: "/usuario/splitbill/session/code",
        element: <SplitBillCode/>
      },
      {
        path: "/usuario/splitbill/session",
        element: <SplitBillSession/>
      },
      {
        path: "/usuario/splitbill/session/pay",
        element: <SplittBillSessionPay/>
      },
      {
        path: "/usuario/budget/reserve-service",
        element: <ReserveMoney/>
      },
      {
        path:"/usuario/budget/add-service",
        element: <AddService/>
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
