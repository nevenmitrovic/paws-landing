import { ToastContainer } from 'react-toastify'

import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection'
import Shop from '@/components/Shop/Shop'
import Services from '@/components/Services/Services'
import AboutUs from '@/components/AboutUs/AboutUs'
import Contact from '@/components/Contact/Contact'
import Team from '@/components/Team/Team'
import Blog from '@/components/Blog/Blog'
import SectionGrid from '@/components/common/SectionGrid/SectionGrid'
import FooterBackground from '@/components/common/FooterBackground/FooterBackground'
import Footer from '@/components/Footer/Footer'
import { CategoryContextProvider } from './contexts/CategoryContext'

function App() {
	return (
		<>
			<CategoryContextProvider>
				<Header />
				<main>
					<HeroSection />
					<Shop />

					<Services />
					<AboutUs />
					<SectionGrid team={<Team />} blog={<Blog />} />
					<FooterBackground>
						<Contact />
					</FooterBackground>
				</main>
			</CategoryContextProvider>
			<FooterBackground>
				<Footer />
			</FooterBackground>
			<ToastContainer />
		</>
	)
}

export default App
