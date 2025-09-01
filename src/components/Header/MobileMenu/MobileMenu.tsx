import { useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'
import styles from './mobile-menu.module.css'
import logo from '@/assets/images/logo.png'
import { IoClose } from 'react-icons/io5'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

export default function MobileMenu() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const isMobile = useIsMobile()

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

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
							Paws n’ Play
						</h3>
						<button onClick={toggleMobileMenu}>
							<IoClose size={25} />
						</button>
					</div>

					{/* MOBILE NAVLINKS */}
					<ul>
						<li>
							<button>
								Shop <FaAngleDown size={20} />
							</button>
						</li>
						<li>
							<button>
								Services <FaAngleDown size={20} />
							</button>
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

					<div className={styles.headerSocial}>
						<p>© 2024 Paws n’ Play. All rights reserved.</p>
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
