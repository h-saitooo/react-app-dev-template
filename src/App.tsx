import { BrowserRouter } from "react-router-dom";
import { ReactRouterRoutes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes />
    </BrowserRouter>
  );
}

export default App;
