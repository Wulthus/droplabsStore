import { Outlet } from "react-router-dom"
import { Navigation } from "./components/navigation"
import { useState } from "react";
import { ProductContextType } from "./types/ProductContext";

export const Root: React.FC = function() {

  const [lastProduct, setLastProduct] = useState("");

  return (
      <>
        <aside className="root-aside">
          <Navigation />
        </aside>
        <main className="root-main">
          <Outlet context={{lastProduct: lastProduct, setLastProduct: setLastProduct} as ProductContextType}/>
        </main>
      </>

  )
}

