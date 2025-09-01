import { useCallback, useEffect, useRef, useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import styles from './navigation.module.css'
import { CATEGORY_BUTTONS } from '@/components/Shop/Shop'
import { useCategoryContext } from '@/contexts/CategoryContext'

export default function Navigation() {
	const [openShop, setOpenShop] = useState(false)
	const [openServices, setOpenServices] = useState(false)
	const shopRef = useRef<null | HTMLButtonElement>(null)
	const servicesRef = useRef<null | HTMLButtonElement>(null)
	const isMobile = useIsMobile()
	const { handleSelectedCategory } = useCategoryContext()

	const toggleShop = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			handleSelectedCategory(e)
			setOpenShop((prev) => !prev)
		},
		[handleSelectedCategory]
	)
	const toggleShopMain = useCallback(() => {
		setOpenShop((prev) => !prev)
	}, [])
	const toggleServices = useCallback(() => setOpenServices((prev) => !prev), [])

	useEffect(() => {
		const shop = shopRef.current
		const services = servicesRef.current

		if (shop) {
			shop.addEventListener('click', toggleShopMain)
		}

		if (services) {
			services.addEventListener('click', toggleServices)
		}

		return () => {
			if (shop) {
				shop.removeEventListener('click', toggleShopMain)
			}
			if (services) {
				services.removeEventListener('click', toggleServices)
			}
		}
	}, [openShop, openServices, toggleShopMain, toggleServices])

	return (
		<>
			{!isMobile && (
				<nav>
					<ul className={styles.navMenu}>
						<li>
							<button ref={shopRef}>
								Shop {!openShop ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
							</button>
							{openShop && (
								<div className={styles.dropdown}>
									{CATEGORY_BUTTONS.map((button) => {
										return (
											<a key={`link-${button}`} href='#shop'>
												<button onClick={toggleShop} value={button}>
													{button.charAt(0).toUpperCase() + button.slice(1)}
												</button>
											</a>
										)
									})}
								</div>
							)}
						</li>
						<li>
							<button ref={servicesRef}>
								Services {!openServices ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
							</button>
							{openServices && (
								<div className={styles.dropdown}>
									<a href='#services'>
										<button onClick={toggleServices}>Grooming</button>
									</a>
									<a href='#services'>
										<button onClick={toggleServices}>Boarding</button>
									</a>
									<a href='#services'>
										<button onClick={toggleServices}>Veterinary</button>
									</a>
									<a href='#services'>
										<button onClick={toggleServices}>Training</button>
									</a>
									<a href='#services'>
										<button onClick={toggleServices}>Adoption</button>
									</a>
								</div>
							)}
						</li>
						<li>
							<button>About us</button>
						</li>
						<li>
							<button>Blog</button>
						</li>
						<li>
							<button>Contact</button>
						</li>
					</ul>
				</nav>
			)}
		</>
	)
}
