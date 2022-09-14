import logo from "./logo.svg";
import "./App.css";

function App() {
  const br = [];

  for (let i = 0; i < 40; i++) {
    br.push(<br key={`k-${i}`} />);
  }

  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button
          data-testid='btn-to-elem'
          onClick={() => scrollToElement("meu-texto")}>
          Link para meu texto
        </button>
        {br}
        <div id='meu-texto'>meu texto</div>
        <button data-testid='btn-to-top' onClick={scrollToTop}>
          Top
        </button>
      </header>
    </div>
  );
}

export default App;
