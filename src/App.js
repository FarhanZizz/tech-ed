import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Courselist from './components/Courselist';
import Courses from './components/Courses';
import Faq from './components/Faq';

import Login from './components/Login';
import Main from './components/Main/Main';
import Signup from './components/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Courses></Courses>
        },
        {
          path: '/categories/:categoryid',
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/categories/${params.categoryid}`)
          },
          element: <Courses></Courses>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'faq',
          element: <Faq></Faq>
        },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
