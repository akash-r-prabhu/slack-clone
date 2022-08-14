import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* Sidebar */}
      <Sidebar />

      {/* react-router -> chat screen */}
    </div>
  );
}

export default App;
