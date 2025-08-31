import type { ReactNode } from 'react'
import styles from './section-grid.module.css'

interface SectionGridProps {
	blog: ReactNode
	team: ReactNode
}

export default function SectionGrid({ blog, team }: SectionGridProps) {
	return (
		<div className={styles.sectionGrid}>
			{blog}
			{team}
		</div>
	)
}
