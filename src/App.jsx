import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navbar/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
