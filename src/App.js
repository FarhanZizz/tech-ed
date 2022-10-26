import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Courses from './components/Courses';
import Faq from './components/Faq';
import Header from './components/Header';
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
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'courses',
          element: <Courses></Courses>
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
