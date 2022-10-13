import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Musicplayer from "./pages/musicplayer/Musicplayer";
import Recorder from "./pages/recorder/Recorder";
Musicplayer;
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/player" element={<Musicplayer />} />
        <Route path="/recorder" element={<Recorder />} />
      </Routes>
    </>
  );
}

export default App;
