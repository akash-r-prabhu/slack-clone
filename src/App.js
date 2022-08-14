import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            {/* react-router -> chat screen */}

            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />

              <Route path="/" element={<h1>welcome</h1>} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
