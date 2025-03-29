import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import WhoWeAre from './Pages/About/who-we-are';
import GlobalPrescence from './Pages/About/GlobalPrescence';
import Leadership from './Pages/About/Leadership';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/about-us/who-we-are'
					element={<WhoWeAre />}
				/>
				<Route
					path='/about-us/global-presence'
					element={<GlobalPrescence />}
				/>
				<Route
					path='/about-us/leadership'
					element={<Leadership />}
				/>
			</Routes>
		</>
	);
}

export default App;
