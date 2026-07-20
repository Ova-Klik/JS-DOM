import {createBrowserRouter} from "react-router";
import productLayout from "../components/pages/productLayout";
import Login from "../components/auth/login/login";
import SignUp from "../components/auth/signUp/SignUp";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>

        },
        {
            path:"/signUp",
            element:<SignUp/>
        },
        {
            path:"/products",
            element:<ProductLayout/>
        }
    ]
)

export default router;