import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.tsx";
import "./index.css";
import LoginPage from "./Pages/LoginPage.tsx";
import Questions from "./Pages/Questions.tsx";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "./Pages/NotFound.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
