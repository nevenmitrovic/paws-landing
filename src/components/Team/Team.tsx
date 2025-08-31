import type { EmployeeCardProps } from './EmployeeCard/EmployeeCard'
import EmployeeCard from './EmployeeCard/EmployeeCard'
import styles from './team.module.css'
import Section from '@/components/common/Section/Section'
import oliviaImg from '@/assets/images/olivia.jpg'
import bakerImg from '@/assets/images/baker.jpg'
import demiImg from '@/assets/images/demi.jpg'
import lanaImg from '@/assets/images/lana.jpg'

const TEAM: EmployeeCardProps[] = [
	{
		name: 'Dr. Olivia Rhye',
		role: 'Senior Veterinarian',
		social: {
			twitter: 'https://twitter.com',
			linkedin: 'https://linkedin.com',
			dribbble: 'https://dribbble.com',
		},
		url: oliviaImg,
	},
	{
		name: 'Phoenix Baker',
		role: 'Asst. Veterinarian',
		social: {
			twitter: 'https://twitter.com',
			linkedin: 'https://linkedin.com',
			dribbble: 'https://dribbble.com',
		},
		url: bakerImg,
	},
	{
		name: 'Lana Steiner',
		role: 'Resident Veterinarian',
		social: {
			twitter: 'https://twitter.com',
			linkedin: 'https://linkedin.com',
			dribbble: 'https://dribbble.com',
		},
		url: lanaImg,
	},
	{
		name: 'Demi Wilkinson',
		role: 'Intern Veterinarian',
		social: {
			twitter: 'https://twitter.com',
			linkedin: 'https://linkedin.com',
			dribbble: 'https://dribbble.com',
		},
		url: demiImg,
	},
]

export default function Team() {
	return (
		<Section id='team' headerText='Our Team'>
			<div className={styles.teamSection}>
				{TEAM.map((employee) => (
					<EmployeeCard
						key={employee.name}
						name={employee.name}
						role={employee.role}
						social={employee.social}
						url={employee.url}
					/>
				))}
			</div>
		</Section>
	)
}
