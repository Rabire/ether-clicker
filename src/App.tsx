import { Home } from 'pages/Home';
import { Game } from 'pages/Game';
import { CssReset, Theme } from 'styles/globals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <CssReset />
      <Theme />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
