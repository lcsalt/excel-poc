import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import NotFoundTitle from '../pages/NotFound';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import { Protected, Public } from '../hocs/withAuthenticated';
// import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    element: <Public />,
    children: [
      //with layout
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          }
        ]
      },
      //without layout
      {
        path: 'auth',
        element: <Authentication />
      }
    ]
  },
  //private routes
  {
    element: <Protected fallbackElement={<Navigate to="/" replace={true} />} />,
    children: [
      {
        path: '/dashboard',
        element: <div>Dashboard</div>
      }
    ]
  },
  {
    path: 'not-found',
    element: <NotFoundTitle />
  },
  {
    path: '*',
    element: <Navigate to="/not-found" replace={true} />
  }
]);

export default router;
