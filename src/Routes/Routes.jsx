import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Blog from "../Pages/Blog/Blog";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/services',
        Component: Services
      },
      {
        path: '/portfolio',
        Component: Portfolio
      },
      {
        path: '/blog',
        Component: Blog
      },
      {
        path: '/contact',
        Component: Contact
      },
    ]
  },
]);