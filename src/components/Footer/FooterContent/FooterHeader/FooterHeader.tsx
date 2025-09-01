import styles from './footer-header.module.css'
import logo from '@/assets/images/logo.png'

export default function FooterHeader() {
	return (
		<header className={styles.footerHeader}>
			<div className={styles.footerLogo}>
				<img src={logo} width={32} height={32} />
				<h3>Paws n’ Play</h3>
			</div>
			<p>Where wagging tails and purring hearts reign supreme!</p>
		</header>
	)
}
