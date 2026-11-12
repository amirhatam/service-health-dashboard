import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <SummaryCards />
          <ServiceCard />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
