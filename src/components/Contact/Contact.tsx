import styles from './contact.module.css'
import Section from '@/components/common/Section/Section'
import ContactBox, { type ContactBoxProps } from '@/components/Contact/ContactBox/ContactBox'
import { MdMailOutline } from 'react-icons/md'
import { BsChat } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

const CONTACT: ContactBoxProps[] = [
	{
		icon: MdMailOutline,
		title: 'Email',
		info: 'Our friendly team is here to help.',
		contact: 'hello@pawsnplay.com',
	},
	{
		icon: BsChat,
		title: 'Live chat',
		info: 'Our friendly team is here to help.',
		contact: 'Start new chat',
	},
	{
		icon: FaMapMarkerAlt,
		title: 'Office',
		info: 'Come say hello at our office HQ.',
		contact: '100, Tran Aistan st, Open Lagos.',
	},
	{
		icon: FiPhone,
		title: 'Phone',
		info: 'Mon-Fri from 8am to 5pm.',
		contact: '+234 813 456 7890',
	},
]

export default function Team() {
	return (
		<Section id='contact' headerText='Get in touch' backgroundColor='--clr-secondary-text'>
			<div className={styles.contactSection}>
				<div className={styles.contactInfo}>
					<div>
						{CONTACT.slice(0, 2).map((contact) => (
							<ContactBox
								key={contact.title}
								icon={contact.icon}
								title={contact.title}
								info={contact.info}
								contact={contact.contact}
							/>
						))}
					</div>
					<div>
						{CONTACT.slice(2, 4).map((contact) => (
							<ContactBox
								key={contact.title}
								icon={contact.icon}
								title={contact.title}
								info={contact.info}
								contact={contact.contact}
							/>
						))}
					</div>
				</div>
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
