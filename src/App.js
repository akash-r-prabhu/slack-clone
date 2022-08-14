import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* react-router -> chat screen */}

        <Routes>
          <Route path="/room/:roomId" element={<Chat />} />

          <Route path="/" element={<h1>welcome</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
