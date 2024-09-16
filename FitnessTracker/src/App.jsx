import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Goals from "./components/Goals";
import Nutrition from './components/Nutrition';
import SleepPatterns from './components/SleepPatterns';
import DashboardNav from './wrappers/DashboardNav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardNav />,
    // element: <HomeNav />,
    
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
      path: "nutrition",
      element: <Nutrition />
      },
      {
        path:"goals",
        element:<Goals />
      },
      {
        path:"SleepPatterns",
        element:<SleepPatterns />
      }
    ]
  },
 
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;