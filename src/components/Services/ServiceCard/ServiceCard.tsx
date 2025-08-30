import styles from './service-card.module.css'

export interface ServiceCardProps {
	title: string
	desc: string
	url: string
}

export default function ServiceCard({ title, desc, url }: ServiceCardProps) {
	return (
		<div className={styles.serviceCard} style={{ backgroundImage: `url(${url})` }}>
			<h3>{title}</h3>
		</div>
	)
}
