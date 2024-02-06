import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './error-page';
import { ROUTES } from './constants/routes';
import Login from './pages/Login/Login';
import HomePage from './pages/HomePage/HomePage';
import Cabinet from './pages/Cabinet/Cabinet';
import { UserProvider } from './components/UserContext/UserContext';
import './index.css';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  { path: ROUTES.USER, element: <Cabinet /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
