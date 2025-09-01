import { useEffect, useState } from 'react'

import styles from './header.module.css'
import { useIsMobile } from '@/hooks/useIsMobile'
import MobileMenu from '@/components/Header/MobileMenu/MobileMenu'
import Navigation from '@/components/Header/Navigation/Navigation'
import Logo from '@/components/Header/Logo/Logo'

export default function Header() {
	const [color, setColor] = useState(false)
	const isMobile = useIsMobile()

	const handleColor = () => {
		if (window.scrollY >= 90) {
			setColor(true)
		} else {
			setColor(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleColor)

		return () => window.removeEventListener('scroll', handleColor)
	}, [])

	return (
		<header className={`${styles.header} ${color ? styles.bgScroll : styles.bgInitial}`}>
			{!isMobile ? (
				<div className={styles.headerContent}>
					<Logo />
					<div className={styles.content}>
						<Navigation />
					</div>
					<div>
						<a href='#shop'>
							<button className={styles.navAction}>GET STARTED</button>
						</a>
					</div>
					<MobileMenu />
				</div>
			) : (
				<>
					<Logo />
					<div className={styles.content}>
						<Navigation />
					</div>
					<MobileMenu />
				</>
			)}
		</header>
	)
}
