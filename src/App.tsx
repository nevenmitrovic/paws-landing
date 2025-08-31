import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Shop from '@/components/Shop/Shop'
import Services from '@/components/Services/Services'
import AboutUs from '@/components/AboutUs/AboutUs'
import Contact from '@/components/Contact/Contact'
import Team from '@/components/Team/Team'
import Blog from '@/components/Blog/Blog'
import SectionGrid from '@/components/common/SectionGrid/SectionGrid'

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<Shop />
				<Services />
				<AboutUs />
				<SectionGrid contact={<Contact />} team={<Team />} blog={<Blog />} />
			</main>
		</>
	)
}

export default App
