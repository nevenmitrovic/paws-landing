import { useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'
import styles from './mobile-menu.module.css'
import logo from '@/assets/images/logo.png'
import { IoClose } from 'react-icons/io5'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { CATEGORY_BUTTONS } from '@/components/Shop/Shop'
import { useCategoryContext } from '@/contexts/CategoryContext'

export default function MobileMenu() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [openShop, setOpenShop] = useState(false)
	const [openServices, setOpenServices] = useState(false)
	const isMobile = useIsMobile()
	const { handleSelectedCategory } = useCategoryContext()

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
	const toggleShop = (e: React.MouseEvent<HTMLButtonElement>) => {
		toggleMobileShopMain()
		handleSelectedCategory(e)
		setOpenServices(false)
		toggleMobileMenu()
	}
	const toggleMobileShopMain = () => {
		setOpenShop((prev) => !prev)
	}
	const toggleMobileServices = () => setOpenServices((prev) => !prev)
	const handleServiceClick = () => {
		toggleMobileServices()
		setOpenShop(false)
		toggleMobileMenu()
	}

	return (
		<>
			{/* MOBILE MENU CONTENT */}
			{isMobile && (
				<nav
					className={`${styles.mobileMenuContent} ${isMobileMenuOpen ? styles.open : styles.close}`}
				>
					{/* MOBILE MENU HEADER */}
					<div className={styles.mobileMenuContentHeader}>
						<h3>
							<img src={logo} alt='paws' width='30px' height='30px' />
							Paws n' Play
						</h3>
						<button onClick={toggleMobileMenu}>
							<IoClose size={25} />
						</button>
					</div>

					{/* MOBILE NAVLINKS */}
					<ul>
						<li>
							<button onClick={toggleMobileShopMain}>
								Shop {!openShop ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
							</button>
							<div className={`${styles.dropdownMobile} ${openShop ? styles.open : styles.close}`}>
								{CATEGORY_BUTTONS.map((button) => {
									return (
										<a key={`mobile-link-${button}`} href='#shop'>
											<button onClick={toggleShop} value={button}>
												{button.charAt(0).toUpperCase() + button.slice(1)}
											</button>
										</a>
									)
								})}
							</div>
						</li>
						<li>
							<button onClick={toggleMobileServices}>
								Services {!openServices ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
							</button>
							<div
								className={`${styles.dropdownMobile} ${openServices ? styles.open : styles.close}`}
							>
								<a href='#services'>
									<button onClick={handleServiceClick}>Grooming</button>
								</a>
								<a href='#services'>
									<button onClick={handleServiceClick}>Boarding</button>
								</a>
								<a href='#services'>
									<button onClick={handleServiceClick}>Veterinary</button>
								</a>
								<a href='#services'>
									<button onClick={handleServiceClick}>Training</button>
								</a>
								<a href='#services'>
									<button onClick={handleServiceClick}>Adoption</button>
								</a>
							</div>
						</li>
						<li>
							<a href='#about-us'>
								<button>About us</button>
							</a>
						</li>
						<li>
							<a href='#blog'>
								<button>Blog</button>
							</a>
						</li>
						<li>
							<a href='#contact'>
								<button>Contact</button>
							</a>
						</li>
					</ul>

					<div className={styles.headerSocial}>
						<p>© 2024 Paws n' Play. All rights reserved.</p>
					</div>
				</nav>
			)}

			{/* MOBILE MENU BUTTON */}
			{isMobile && (
				<button className={styles.mobileMenu} onClick={toggleMobileMenu}>
					<HiMenuAlt3 size={30} />
				</button>
			)}
		</>
	)
}
