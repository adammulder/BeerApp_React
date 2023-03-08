import Home from "../pages/pages/Home"
import About from "../pages/pages/About"
import Brewery from "../pages/pages/Brewery"
import Dashboard from "../pages/pages/Dashboard"
import Resourses from "../pages/pages/Resourses"
import Songs from "../pages/pages/Songs"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}


const routes: RouteType[] = [
    {
      path:"",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name : "Dashboard",
      protected: true,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    },
    {
        path: "/brewery",
        component: Brewery,
        name: "Brewery",
        protected: false,
    },
    {
        path: "/resources",
        component: Resourses,
        name: "Resources",
        protected: false,
    },
    {
        path: "/songs",
        component: Songs,
        name: "Songs",
        protected: false,
    },
  ];

export default routes