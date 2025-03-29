import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/about'
					element={<h1>About</h1>}
				/>
			</Routes>
		</>
	);
}

export default App;
