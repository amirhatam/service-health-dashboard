import AppFooter from "./components/AppFooter";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <ServiceCard />
      </div>

      <AppFooter />
    </div>
  );
}

export default App;
