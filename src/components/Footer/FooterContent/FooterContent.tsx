import FooterHeader from '@/components/Footer/FooterContent/FooterHeader/FooterHeader'
import FooterLinks from '@/components/Footer/FooterContent/FooterLinks/FooterLinks'
import styles from './footer-content.module.css'

export default function FooterContent() {
	return (
		<div className={`${styles.footerContent} wrapper`}>
			<FooterHeader />
			<FooterLinks />
		</div>
	)
}
