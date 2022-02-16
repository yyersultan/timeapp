import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { History } from "./components/History/History";

function App() {
  return (
    <div className="App">
      <div className="container">

        <section className="section1">
          <Header />
          <Filters />
          <History />
        </section>

        <section className="section2">
          sd
        </section>
      </div>
    </div>
  );
}

export default App;
