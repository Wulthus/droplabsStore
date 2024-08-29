import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../root";
import { Home } from "../../pages/home/home";
import { Products } from "../../pages/products/products";
import { Product } from "../../pages/product/product";
import { Error } from "../../pages/error/error";


export const storeRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path:"/products",
                element: <Products />,
                errorElement: <Error />,
            },
            {
                path: "/products/:productID",
                element: <Product />,
                errorElement: <Error />,
            }
        ]
    }
])