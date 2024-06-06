import { createBrowserRouter } from "react-router-dom";
import { BrowsePage, FavoritePage, HomePage, LibraryPage } from "./Pages";
import { PropsWithChildren } from "react";
import { PageLayout } from "./Components";
import ErrorPage from "./Pages/ErrorPage";

const Root = ({ children }: PropsWithChildren) => (
  <PageLayout>{children}</PageLayout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/browse",
        element: <BrowsePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/library",
        element: <LibraryPage />,
      },
    ],
  },
]);

export default router;
