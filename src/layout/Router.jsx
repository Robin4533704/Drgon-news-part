import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import HomeLayOut from "./HomeLayOut";
import CategoriesNews from "../pages/CategoriesNews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayOut />,
    children: [
      { 
        
        path: "",
        element: <Home />
      },
      {
        path: '/category/:id',
        element: <CategoriesNews/>,
        loader: ()=> fetch("/news.json")
      }
    ]
  }
]);

export default router;
