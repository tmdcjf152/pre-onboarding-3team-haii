import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Musicplayer from './pages/musicplayer/Musicplayer';
import Recoder from './pages/recoder/Recoder';
Musicplayer;
function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Recoder />} />
				<Route path='/player' element={<Musicplayer />} />
			</Routes>
		</>
	);
}

export default App;
