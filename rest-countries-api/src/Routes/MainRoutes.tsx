import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/Countries/Countries";

export const MainRoutes = () => {
    return useRoutes([
        {path:'/', element: <Countries />},
    ])
}