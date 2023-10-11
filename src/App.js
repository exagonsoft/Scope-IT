import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./UI/loadingScreen";
import { authRoutes, layoutRoute, routes, siteRoutes } from "./routes/routes";
import RequireAuth from "./components/requireAuth";

function App() {
  return (
    <div className="App flex">
      <div className="main">
        <div className="gradient" />
      </div>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path={layoutRoute.path} element={layoutRoute.element}>
              {siteRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Route>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {authRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
