import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import { Suspense, useContext } from "react";
import Loading from "./UI/loadingScreen";
import { authRoutes, layoutRoute, routes, siteRoutes } from "./routes/routes";
import { Context } from "./contexts/mainContext";

function App() {
  const {user} = useContext(Context)

  return (
    <div className="App flex">
      <div className="main">
        <div className="gradient" />
      </div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={layoutRoute.path} element={layoutRoute.element}>
              {siteRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            {authRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
