import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameContextProvider } from 'contexts/Game';
import { Home } from 'pages/Home';
import { Game } from 'pages/Game';
import { CssReset, Theme } from 'styles/globals';
import { DAppProvider } from '@usedapp/core';

function App() {
  return (
    <>
      <CssReset />
      <Theme />

      <DAppProvider config={{}}>
        <GameContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="play" element={<Game />} />
            </Routes>
          </BrowserRouter>
        </GameContextProvider>
      </DAppProvider>
    </>
  );
}

export default App;
