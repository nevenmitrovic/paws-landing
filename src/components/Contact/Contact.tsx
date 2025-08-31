import styles from './contact.module.css'
import Section from '@/components/common/Section/Section'

export default function Team() {
	return (
		<Section id='contact' headerText='Contact'>
			<div className={styles.contactSection}>CONTACT</div>
		</Section>
	)
}
