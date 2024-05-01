import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
