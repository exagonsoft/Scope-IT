import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landingPage";
import { Suspense } from "react";
import Loading from "./UI/loadingScreen";

function App() {
  return (
    <div className="App flex">
      <div className="main">
        <div className="gradient" />
      </div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
