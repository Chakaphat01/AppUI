import { RouterProvider } from "react-router"
import Router from "./Router"
function AppRouter(){
    return(
        <div>
            <RouterProvider router={Router}/>
        </div>
    )
}
export default AppRouter