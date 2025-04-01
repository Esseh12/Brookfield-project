import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import WhoWeAre from './Pages/About/who-we-are';
import GlobalPrescence from './Pages/About/GlobalPrescence';
import Leadership from './Pages/About/Leadership';
import Responsibility from './Pages/Responsibity/Responsibilty';
import NetZeroCommitment from './Pages/Responsibity/NetZeroCommitment';
import OurWorkplace from './Pages/Responsibity/Ourworkplace';
import SustainabilityResources from './Pages/Responsibity/SustainabilityResources';
import StudentPrograms from './Pages/Careers/StudentPrograms';

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
				<Route
					path='/responsibility'
					element={<Responsibility />}
				/>
				<Route
					path='/responsibility/tamseys-net-zero-commitment'
					element={<NetZeroCommitment />}
				/>
				<Route
					path='/responsibility/our-workplace'
					element={<OurWorkplace />}
				/>
				<Route
					path='/responsibility/sustainability-resources'
					element={<SustainabilityResources />}
				/>
				<Route
					path='/careers/student-programs'
					element={<StudentPrograms />}
				/>
			</Routes>
		</>
	);
}

export default App;
