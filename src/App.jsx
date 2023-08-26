import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPages from "./Pages/LandingPages";
import MyTask from "./Pages/MyTask";
import NewTask from "./Pages/NewTask";
import EditTask from "./Pages/EditTask";
import MyNav from "./Component/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const baseURL = 'https://taskmangerrichdery.onrender.com'

  return (
    <>
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/my-task" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new-task" element={<NewTask baseURL={baseURL}  />} />
          <Route path="/edit-task/:id" element={<EditTask  baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
