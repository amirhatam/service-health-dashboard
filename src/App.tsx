import AppFooter from "./components/AppFooter";
import Header from "./components/Header";

import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <main>
      <Header />

      <section>
        <ServiceCard />
      </section>

      <AppFooter />
    </main>
  );
}

export default App;
