import { useState } from 'react'

import styles from './header.module.css'
import logo from '@/assets/images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const isMobile = useIsMobile()

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

	return (
		<header className={styles.header}>
			<div className={styles.content}>
				{/* LOGO */}
				<div className={styles.logo}>
					<img src={logo} width={27.09400177001953} height={24.540000915527344} />
					<h3>Paws n’ Play</h3>
				</div>

				{/* NAVLINKS */}
				{!isMobile && (
					<nav>
						<ul className={styles.navMenu}>
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
					</nav>
				)}
			</div>

			{/* NAVIGATION ACTION */}
			{!isMobile && (
				<div>
					<button className={styles.navAction}>GET STARTED</button>
				</div>
			)}

			{/* MOBILE MENU BUTTON */}
			{isMobile && (
				<button className={styles.mobileMenu} onClick={toggleMobileMenu}>
					<HiMenuAlt3 size={30} />
				</button>
			)}

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
				</nav>
			)}
		</header>
	)
}
