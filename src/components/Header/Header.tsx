import styles from './header.module.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useIsMobile } from '@/hooks/useIsMobile'
import MobileMenu from '@/components/Header/MobileMenu/MobileMenu'
import Navigation from '@/components/Header/Navigation/Navigation'
import Logo from '@/components/Header/Logo/Logo'

export default function Header() {
	const isMobile = useIsMobile()

	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.content}>
				<Navigation />
			</div>
			{!isMobile && (
				<div>
					<button className={styles.navAction}>GET STARTED</button>
				</div>
			)}
			<MobileMenu />
		</header>
	)
}
