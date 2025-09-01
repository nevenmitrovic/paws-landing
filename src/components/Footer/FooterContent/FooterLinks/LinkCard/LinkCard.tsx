import styles from './link-card.module.css'

interface Link {
	href: string
	label: string
}

export interface LinkCardProps {
	title: string
	links: Link[]
}

export default function LinkCard({ title, links }: LinkCardProps) {
	return (
		<div className={styles.linkCard}>
			<h4>{title}</h4>
			<div>
				{links.map((link) => (
					<a key={link.label} href={link.href}>
						{link.label}
					</a>
				))}
			</div>
		</div>
	)
}
