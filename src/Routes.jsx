import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomeLayout from './pages/Layout/HomeLayout';
import Profile from './pages/Dashboard/Profile';
import InstagramSchedule from './pages/Dashboard/Instagram/InstagramSchedule';
import InstagramInsights from './pages/Dashboard/Instagram/InstagramInsights';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Settings from './pages/Dashboard/Settings';
import AppHome from './pages/Dashboard/AppHome';
import InstagramInbox from './pages/Dashboard/Instagram/InstagramInbox';
import InstagramAllPosts from './pages/Dashboard/Instagram/InstagramAllPosts';

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '/plan',
        element: <Plans />,
      },
    ],
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: '',
        element: <AppHome />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'settings',
        element: <Settings />,
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
          {
            path: 'inbox',
            element: <InstagramInbox />,
          },
          {
            path: 'allposts',
            element: <InstagramAllPosts />,
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
