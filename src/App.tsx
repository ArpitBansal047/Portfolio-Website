import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { SoundProvider } from "./context/SoundProvider";

const App = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <LoadingProvider>
          <Suspense fallback={null}>
            <MainContainer />
          </Suspense>
        </LoadingProvider>
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
