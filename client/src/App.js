import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import NavBar from "./components/navbar/NavBar";
import LoginPage from "./pages/login/LoginPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)
  //console.log(darkMode)

  const queryClient = new QueryClient()
  // console.log(queryClient);

  const Layout = ()=>{
    return(
       <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark":"light"}`}>
        <NavBar/>
        <div style = {{display:"flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/> ;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/profile/:id",
          element: <Profile/>,
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;