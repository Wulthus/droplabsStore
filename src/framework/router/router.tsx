import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../root";
import { Home } from "../../pages/home/home";
import { Products } from "../../pages/products/products";


export const storeRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/products",
                element: <Products />
            }
        ]
    }
])