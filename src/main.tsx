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
import Logout from "./Pages/Logout.tsx";
import authApi from "./utils/Services/auth.api.ts";

const user = authApi.getCurrentUser();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/feed" replace />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/logout" element={<Logout />}  />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
        <Route path="/questions/:id" element={<Question />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
