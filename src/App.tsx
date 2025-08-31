import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Shop from '@/components/Shop/Shop'
import Services from '@/components/Services/Services'
import AboutUs from './components/AboutUs/AboutUs'
import SectionGrid from './components/common/SectionGrid/SectionGrid'

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<Shop />
				<Services />
				<AboutUs />
				<SectionGrid
					contact={<section>contact</section>}
					team={<section>team</section>}
					blog={<section>blog</section>}
				/>
			</main>
		</>
	)
}

export default App
