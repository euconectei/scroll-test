import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const br = [];
  const [buttonHidden, setButtonHidden] = useState(true);

  for (let i = 0; i < 40; i++) {
    br.push(<br key={`k-${i}`} />);
  }

  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    console.log(`muda a visibilidade ${window.scrollY}`);
    hiddenRef.current.style.visibility = buttonHidden ? "hidden" : "visible";
  }, [buttonHidden, window.scrollY]);

  const scrollHandler = () => setButtonHidden(window.scrollY <= 50);

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
        <button
          aria-hidden={buttonHidden}
          ref={hiddenRef}
          data-testid='btn-to-top'
          id='button-top'
          onClick={scrollToTop}>
          Top (shows)
        </button>
        {!buttonHidden && (
          <button
            data-testid='btn-to-top2'
            id='button-top2'
            onClick={scrollToTop}>
            Top (write)
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
