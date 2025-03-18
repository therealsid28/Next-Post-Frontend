import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import InstagramSchedule from './Features/Instagram/InstagramSchedule';
import InstagramInsights from './Features/Instagram/InstagramInsights';

const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'instagram',
        children: [
          {
            path: 'schedule',
            element: <InstagramSchedule />,
          },
          {
            path: 'insights',
            element: <InstagramInsights />,
          },
        ],
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
