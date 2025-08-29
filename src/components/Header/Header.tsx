import styles from './header.module.css'
import logo from '@/assets/images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} width={27.09400177001953} height={24.540000915527344} />
				<h3>Paws n’ Play</h3>
			</div>

			{/* MOBILE MENU BUTTON */}
			<button className={styles.menu}>
				<HiMenuAlt3 size={30} />
			</button>
		</header>
	)
}
