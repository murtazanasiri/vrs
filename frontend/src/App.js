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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AllRequests />,
          },
          {
            path: "new-request",
            element: <NewRequest />,
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
