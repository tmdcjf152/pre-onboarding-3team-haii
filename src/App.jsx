import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Musicplayer from './pages/musicplayer/Musicplayer';

Musicplayer;
function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Musicplayer />} />
			</Routes>
		</>
	);
}

export default App;
