import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './scenes/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Team from './scenes/team';
import Contact from './scenes/contact/Contact';
import Invoice from './scenes/invoice/Invoice';
import Form from './scenes/form/Form';
import Calender from './scenes/calander/Calender';
import Faq from './scenes/faq/Faq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/contacts',
        element: <Contact />,
      },
      {
        path: '/invoices',
        element: <Invoice />,
      },
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/calender',
        element: <Calender />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
