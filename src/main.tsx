import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home.tsx";
import "./index.css";
import LoginPage from "./Pages/LoginPage.tsx";
import Questions from "./Pages/Questions.tsx";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "./Pages/NotFound.tsx";
import Question from "./Pages/Question.tsx";
import Categories from "./Pages/Categories.tsx";
import Profile from "./Pages/Profile.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="/" element={<Navigate to="/feed" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
