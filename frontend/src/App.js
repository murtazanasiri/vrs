import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Login,
  Register,
  Error,
  HomeLayout,
  DashboardLayout,
  Landing,
  AllRequests,
  NewRequest,
} from "./pages";
import { action as registerAction } from "./pages/UserRegister";
import { action as loginAction } from "./pages/Login";
import { action as newRequestAction } from "./pages/NewRequest";
import { loader as dashbaordLoader } from "./pages/DashboardLayout";
import { loader as allRequestLoader } from "./pages/AllRequests";
import DetailsRequest from "./pages/RequestDetails";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        loader: dashbaordLoader,
        children: [
          {
            index: true,
            element: <AllRequests />,
            loader: allRequestLoader,
          },
          {
            path: "new-request",
            element: <NewRequest />,
            action: newRequestAction,
          },
          {
            path: "request-details/:id",
            element: <DetailsRequest />,
          },
        ],
      },
    ],
  },

  { path: "error", element: <Error /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
