import { createBrowserRouter } from "react-router";
import Page01 from "./Page01";
import Page02 from "./Page02";

const Router = createBrowserRouter


export default Router([
    {
        path:"/",
        element:<Page01/>
    },
    {
        path:"page02",
        element:<Page02/>
    }
])