import { Route, Routes } from "react-router-dom";
import { nav } from "./navigation";
import PageNotFound from "../components/micros/PageNotFound";

const RoutesRender = () => {
    const isAuthenticated = true
  return (
  <>
      <Routes>
        {nav.map((r, i) => {
          // Protected routes
          if (r.isPrivate === isAuthenticated) {
            return <Route key={i} path={r.path} element={r.element} />;
          }
          // Public Routes
          else if (!r.isPrivate) {
            return <Route key={i} path={r.path} element={r.element} />;
          } else return false;
        })}
         <Route path="*" element={<PageNotFound />} />
      </Routes>
  
  
  
  </>
  )
}

export default RoutesRender