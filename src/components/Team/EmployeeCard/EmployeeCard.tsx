import type { IconType } from 'react-icons'
import styles from './employee-card.module.css'
import { FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa'

interface Social {
	twitter: string
	linkedin: string
	dribbble: string
}

export interface EmployeeCardProps {
	name: string
	role: string
	social: Social
	url: string
}

const SOCIAL: { [key: string]: IconType } = {
	twitter: FaTwitter,
	linkedin: FaLinkedin,
	dribbble: FaDribbble,
}

export default function EmployeeCard({ name, role, social, url }: EmployeeCardProps) {
	return (
		<div className={styles.employeeCard}>
			<div className={styles.profilePicture} style={{ backgroundImage: `url(${url})` }} />
			<div className={styles.employeeInfo}>
				<h3>{name}</h3>
				<p>{role}</p>
			</div>
			<div>
				{Object.entries(social).map(([key, value]) => {
					const Icon = SOCIAL[key]
					return (
						<a href={value} key={key} target='_blank'>
							<Icon color='#98A2B3' />
						</a>
					)
				})}
			</div>
		</div>
	)
}
