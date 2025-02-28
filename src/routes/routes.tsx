import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import NotoSans from "../pages/noto-sans/noto-sans";
import NotoSerif from "../pages/noto-serif/noto-serif";

export function ReactRouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
