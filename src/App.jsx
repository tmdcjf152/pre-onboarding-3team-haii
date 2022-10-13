<<<<<<< HEAD
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
        <Route path="/" element={<Recorder />} />
        <Route path="/player" element={<Musicplayer />} />
        <Route path="/recorder" element={<Recorder />} />
      </Routes>
    </>
  );
=======
import {Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Mainpage from './pages/Mainpage';
import Musicplayer from './pages/musicplayer/Musicplayer';
import Navbar from './components/nav/Navbar';
import Recoder from './pages/recoder/Recoder';

function App() {
	return (<>
		<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path='/' element={<Mainpage />} />
				<Route path='/record' element={<Recoder /> } />
				<Route path='/player' element={<Musicplayer />} />
			</Routes>
	</>);
>>>>>>> a93fc621b1821dce3afd8d5637012d54c4aad8b5
}

export default App;
