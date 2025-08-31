import styles from './contact.module.css'
import Section from '@/components/common/Section/Section'
import ContactInfo from './ContactInfo/ContactInfo'

export default function Team() {
	return (
		<Section id='contact' headerText='Get in touch' backgroundColor='--clr-secondary-text'>
			<div className={styles.contactSection}>
				<ContactInfo />
				<form>
					<div>
						<input type='text' />
						<input type='text' />
					</div>
					<input type='email' />
					<textarea />
					<input type='checkbox' />{' '}
					<span>
						You agree to our friendly <a href='#'>privacy policy</a>.
					</span>
					<button>Send message</button>
				</form>
			</div>
		</Section>
	)
}
