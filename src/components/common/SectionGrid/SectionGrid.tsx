import type { ReactNode } from 'react'
import styles from './section-grid.module.css'

interface SectionGridProps {
	blog: ReactNode
	team: ReactNode
	contact: ReactNode
}

export default function SectionGrid({ blog, team, contact }: SectionGridProps) {
	return (
		<div className={styles.sectionGrid}>
			{blog}
			{team}
			{contact}
		</div>
	)
}
