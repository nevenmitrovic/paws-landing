import { useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import styles from './navigation.module.css'
import { CATEGORY_BUTTONS } from '@/components/Shop/Shop'
import { useCategoryContext } from '@/contexts/CategoryContext'

export default function Navigation() {
	const [openShop, setOpenShop] = useState(false)
	const [openServices, setOpenServices] = useState(false)
	const isMobile = useIsMobile()
	const { handleSelectedCategory } = useCategoryContext()

	const handleShop = (e: React.MouseEvent<HTMLButtonElement>) => {
		handleSelectedCategory(e)
		setOpenServices(false)
		toggleShop()
	}
	const handleService = () => {
		toggleServices()
		setOpenShop(false)
	}
	const toggleShop = () => {
		setOpenServices(false)
		setOpenShop((prev) => !prev)
	}
	const toggleServices = () => {
		setOpenShop(false)
		setOpenServices((prev) => !prev)
	}

	return (
		<>
			{!isMobile && (
				<nav>
					<ul className={styles.navMenu}>
						<li>
							<button onClick={toggleShop}>
								Shop {!openShop ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
							</button>
							{openShop && (
								<div className={styles.dropdown}>
									{CATEGORY_BUTTONS.map((button) => {
										return (
											<a key={`link-${button}`} href='#shop'>
												<button onClick={handleShop} value={button}>
													{button.charAt(0).toUpperCase() + button.slice(1)}
												</button>
											</a>
										)
									})}
								</div>
							)}
						</li>
						<li>
							<button onClick={toggleServices}>
								Services {!openServices ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
							</button>
							{openServices && (
								<div className={styles.dropdown}>
									<a href='#services'>
										<button onClick={handleService}>Grooming</button>
									</a>
									<a href='#services'>
										<button onClick={handleService}>Boarding</button>
									</a>
									<a href='#services'>
										<button onClick={handleService}>Veterinary</button>
									</a>
									<a href='#services'>
										<button onClick={handleService}>Training</button>
									</a>
									<a href='#services'>
										<button onClick={handleService}>Adoption</button>
									</a>
								</div>
							)}
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
				</nav>
			)}
		</>
	)
}
