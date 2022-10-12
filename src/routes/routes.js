
import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Root from "../components/Root/Root";
import Home from '../components/Home/Home';
import Blog from '../components/Blog/Blog';
import Catagory from '../components/Catagory/Cetagory'
import { CatagoryData } from "../components/loader/getCartAndProduct";
import TopicesDetails from "../components/TopicesDetails/TopicesDetails";



const router = createBrowserRouter([



    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage />,

        loader:CatagoryData,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/home',
                element: <Home></Home>,

            },
            {
                path: 'topics',
              
                element: <Catagory></Catagory>,

            },{
                path: '/topic/:topicId',
                loader:async({params})=>{
        
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
                    
                },
             
                element: <TopicesDetails></TopicesDetails>,

            },
            {
                path: 'blog',
                element: <Blog></Blog>,

            },

        ]
    }

])

export default router