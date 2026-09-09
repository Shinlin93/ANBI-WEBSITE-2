import { createBrowserRouter } from "react-router";
import Root from "@/layout/Root";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetail },
    ],
  },
]);
