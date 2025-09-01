import styles from './logo.module.css'
import logo from '@/assets/images/logo.png'

export default function Logo() {
	return (
		<a href='#hero' className={styles.logoLink}>
			<div className={styles.logo}>
				<img src={logo} style={{ width: '27px', height: '24px' }} />
				<h3>Paws n' Play</h3>
			</div>
		</a>
	)
}
