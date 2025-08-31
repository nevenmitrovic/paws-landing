import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Shop from '@/components/Shop/Shop'
import Services from '@/components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<Shop />
				<Services />
				<AboutUs />
			</main>
		</>
	)
}

export default App
