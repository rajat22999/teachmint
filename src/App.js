import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./Pages/users";
import UserDetails from "./Pages/userDetail";
import Error from "./Pages/error";
import Header from "./Components/Header";

function App() {
  const Applayout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Users />,
        },
        {
          path: "userDetail/:id",
          element: <UserDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
