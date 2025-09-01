import styles from './footer.module.css'
import Subscribe from '@/components/Footer/Subscribe/Subscribe'
import FooterContent from '@/components/Footer/FooterContent/FooterContent'

export default function Footer() {
	return (
		<footer id='footer' className={styles.footer}>
			<Subscribe />
			<FooterContent />
		</footer>
	)
}
