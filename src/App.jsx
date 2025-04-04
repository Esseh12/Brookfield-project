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
import Opportunities from './Pages/Careers/Oppurtunities';
import Insights from './Pages/NewsAndInsight/Insights';
import Podcast from './Pages/NewsAndInsight/Podcast';
import NewsRoom from './Pages/NewsAndInsight/NewsRoom';
import PrivateMarketSolutions from './Pages/Investors/PrivateMarketSolutions';
import PublicSecurities from './Pages/Investors/PublicSecurities';
import RetirementServices from './Pages/Businesses/RetirementServices';
import RenewablePowerTransition from './Pages/Businesses/RenewablePowerTransition';
import Infrastructure from './Pages/Businesses/infrastructure';
import PrivateEquity from './Pages/Businesses/PrivateEquity';
import RealEstate from './Pages/Businesses/RealEstate';
import Credit from './Pages/Businesses/Credit';
import SustainabilityReport from './Pages/Responsibity/SustainabilityReport';

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
				<Route
					path='/careers/opportunities'
					element={<Opportunities />}
				/>
				<Route
					path='/news-insights/insights'
					element={<Insights />}
				/>
				<Route
					path='/news-insights/podcasts/brookfield-perspectives'
					element={<Podcast />}
				/>
				<Route
					path='/news-insights/newsroom'
					element={<NewsRoom />}
				/>
				<Route
					path='/institutional-investors'
					element={<PrivateMarketSolutions />}
				/>
				<Route
					path='/institutional-investors/public-securities'
					element={<PublicSecurities />}
				/>
				<Route
					path='/our-businesses/retirement-services'
					element={<RetirementServices />}
				/>
				<Route
					path='/our-businesses/renewable-power-transition'
					element={<RenewablePowerTransition />}
				/>
				<Route
					path='/our-businesses/infrastructure'
					element={<Infrastructure />}
				/>
				<Route
					path='/our-businesses/private-equity'
					element={<PrivateEquity />}
				/>
				<Route
					path='/our-businesses/real-estate'
					element={<RealEstate />}
				/>
				<Route
					path='/our-businesses/credit'
					element={<Credit />}
				/>
				<Route
					path='/responsibility/2023-sustainability-report'
					element={<SustainabilityReport />}
				/>
				<Route
					path='*'
					element={<Homepage />}
				/>
			</Routes>
		</>
	);
}

export default App;
