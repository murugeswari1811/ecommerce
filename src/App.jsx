import './App.css'
import Home from './components/home';
import Login from './components/login';
import Main from './components/main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/signup';
import Fruits from './components/fruits';
import Vegetables from './components/vegetables';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/main",
    element: <Main/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/fruit",
    element: <Fruits/>
  },
  {
    path: "/veg",
    element: <Vegetables/>
  },
  ])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
