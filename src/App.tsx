import AppFooter from "./components/AppFooter";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <main>
      <header>
        <h1 className="mb-4 text-2xl font-bold">Service Health Dashboard</h1>

        <p className="my-3">Stage 1 — Service data model verification</p>
      </header>

      <section>
        <ServiceCard />
      </section>
      <AppFooter />
    </main>
  );
}

export default App;
