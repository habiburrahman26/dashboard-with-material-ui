import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './scenes/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Team from './scenes/team';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
