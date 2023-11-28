import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { DltProvider } from "./context/DltContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DltProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DltProvider>
);
