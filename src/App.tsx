import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameContextProvider } from 'contexts/Game';
import { Home } from 'pages/Home';
import { Game } from 'pages/Game';
import { CssReset, Theme } from 'styles/globals';

function App() {
  return (
    <>
      <CssReset />
      <Theme />

      <GameContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="play" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </GameContextProvider>
    </>
  );
}

export default App;
