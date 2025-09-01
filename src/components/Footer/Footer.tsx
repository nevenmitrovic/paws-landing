import styles from './footer.module.css'
import Subscribe from '@/components/Footer/Subscribe/Subscribe'

export default function Footer() {
	return (
		<footer id='footer' className={styles.footer}>
			<Subscribe />
		</footer>
	)
}
