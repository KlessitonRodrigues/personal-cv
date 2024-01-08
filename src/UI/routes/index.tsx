import { Route, Routes } from "react-router-dom";
import useRoutes from "src/hooks/useRoutes";
import GlobalCSS from "src/styles/globalCSS";
import { defaultTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import HomePage from "../pages/Home";

const Router = () => {
  const routes = useRoutes();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes location={routes}>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
