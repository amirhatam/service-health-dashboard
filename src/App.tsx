import { mockServices } from "./data/mockServices";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SummaryCards from "./components/SummaryCards";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <SummaryCards services={mockServices} />
          <ServiceList services={mockServices} />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
