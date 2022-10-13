import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Mainpage from "./pages/Mainpage";
import Musicplayer from "./pages/musicplayer/Musicplayer";
import Navbar from "./components/nav/Navbar";
import Recorder from "./pages/recorder/Recorder";

function App() {

	return (<>
		<GlobalStyle />
			<Navbar />
			<Routes>
			<Route path='/' element={<Mainpage />} />
			<Route path='/recorder' element={<Recorder />} />
			<Route path='/player' element={<Musicplayer />} />
			</Routes>
	</>);

}

export default App;
