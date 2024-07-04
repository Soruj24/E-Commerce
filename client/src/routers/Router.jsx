import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

export default router;
