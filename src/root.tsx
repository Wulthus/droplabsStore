import { Outlet } from "react-router-dom"
import { Navigation } from "./components/navigation"

export const Root: React.FC = function() {

  return (
      <>
        <aside className="root-aside">
          <Navigation />
        </aside>
        <main className="root-main">
          <Outlet />
        </main>
      </>

  )
}

