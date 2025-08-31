import type { IconType } from 'react-icons'
import styles from './contact-box.module.css'

export interface ContactBoxProps {
	icon: IconType
	title: string
	info: string
	contact: string
}

export default function ContactBox({ icon, title, info, contact }: ContactBoxProps) {
	const Icon = icon

	return (
		<div className={styles.contactBox}>
			<div>
				<Icon />
			</div>
			<h4>{title}</h4>
			<p>{info}</p>
			<p>{contact}</p>
		</div>
	)
}
