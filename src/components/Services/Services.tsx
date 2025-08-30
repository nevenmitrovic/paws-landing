import styles from './services.module.css'
import Section from '@/components/common/Section/Section'
import ServiceCard, { type ServiceCardProps } from '@/components/Services/ServiceCard/ServiceCard'
import groomingImg from '@/assets/images/grooming.png'
import boardingImg from '@/assets/images/boarding.png'
import trainingImg from '@/assets/images/training.png'
import veterinaryImg from '@/assets/images/veterinary.png'
import adoptionImg from '@/assets/images/adoption.png'

const SERVICES: ServiceCardProps[] = [
	{
		title: 'Grooming',
		desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam. Dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam.',
		url: groomingImg,
	},
	{
		title: 'Boarding',
		desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam. Dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam.',
		url: boardingImg,
	},
	{
		title: 'Veterinary',
		desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam. Dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam.',
		url: veterinaryImg,
	},
	{
		title: 'Training',
		desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam. Dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam.',
		url: trainingImg,
	},

	{
		title: 'Adoption',
		desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam. Dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam. Donec pellentesque ut eget tempor egestas diam.',
		url: adoptionImg,
	},
]

export default function Services() {
	return (
		<Section id='services' headerText='Services'>
			<div className={styles.servicesContainer}>
				{SERVICES.map((service) => (
					<ServiceCard
						key={service.title}
						url={service.url}
						title={service.title}
						desc={service.desc}
					/>
				))}
			</div>
		</Section>
	)
}
