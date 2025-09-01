import styles from './contact.module.css'
import Section from '@/components/common/Section/Section'
import ContactInfo from './ContactInfo/ContactInfo'
import Form from './Form/Form'

export default function Team() {
	return (
		<Section id='contact' headerText='Get in touch' backgroundColor='--clr-secondary-text'>
			<div className={styles.contactSection}>
				<ContactInfo />
				<Form />
			</div>
		</Section>
	)
}
