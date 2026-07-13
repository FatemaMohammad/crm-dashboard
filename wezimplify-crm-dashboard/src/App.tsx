import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-slate-100 flex">
      <Sidebar />

      <div className="flex min-h-0 flex-1 flex-col">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;