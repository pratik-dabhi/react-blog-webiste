import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Single } from "./pages/Single/Single";
import { Write } from "./pages/Write/Write";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./App.css";

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path: "/",
      element:<Home/>
    },
    {
      path: "/post/:id",
      element:<Single/>,
    },
    {
      path: "/write",
      element:<Write/>,
    }]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  {
    path: "/write",
    element: <Write/>,
  }
]);



function App() {
  return (
    <div className="app">
     <div className="container">
       <RouterProvider router={router} />
     </div>
    </div>
  );
}

export default App;
