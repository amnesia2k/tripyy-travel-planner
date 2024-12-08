import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "./components/common/Loading";
import { ThemeProvider } from "./components/theme-provide";
import { Toaster } from "sonner";

const HomePage = lazy(() => import("./pages/HomePage"));
const CreateTrip = lazy(() => import("./pages/CreateTrip"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route
        path="/create-trip"
        element={
          <Suspense fallback={<Loading />}>
            <CreateTrip />
          </Suspense>
        }
      />
    </Route>
  )
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="max-w-7xl py-5 lg:px-0 mx-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster richColors position="bottom-right" duration={5000} />
        {isLoading ? <Loading /> : <RouterProvider router={router} />}
      </ThemeProvider>
    </div>
  );
};

export default App;
