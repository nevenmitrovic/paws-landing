import useLayer from '@/hooks/useLayer'
import styles from './service-card.module.css'
import { useId } from 'react'

export interface ServiceCardProps {
	title: string
	desc: string
	url: string
}

export default function ServiceCard({ title, desc, url }: ServiceCardProps) {
	const id = useId()
	const { showLayer, ref } = useLayer(id)

	return (
		<div ref={ref} className={styles.serviceCard} style={{ backgroundImage: `url(${url})` }}>
			{!showLayer && <h3>{title}</h3>}

			<div className={`${styles.serviceCardDetails} ${showLayer ? styles.show : styles.hide}`}>
				<div className={styles.serviceInfo}>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
				<div>
					<button>Learn more</button>
				</div>
			</div>
		</div>
	)
}
