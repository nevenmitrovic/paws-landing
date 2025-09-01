import styles from './header.module.css'
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
					<a href='#shop'>
						<button className={styles.navAction}>GET STARTED</button>
					</a>
				</div>
			)}
			<MobileMenu />
		</header>
	)
}
