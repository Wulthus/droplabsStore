import { Outlet } from "react-router-dom"
import { Navigation } from "./components/navigation"
import { useEffect, useState } from "react";

export const Root: React.FC = function() {

  const [lastProduct, setLastProduct] = useState("");
  useEffect(function(){
    console.log(lastProduct)
  }, [lastProduct])


  return (
      <>
        <aside className="root-aside">
          <Navigation />
        </aside>
        <main className="root-main">
          <Outlet context={[lastProduct, setLastProduct]}/>
        </main>
      </>

  )
}

