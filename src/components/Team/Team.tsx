import styles from './team.module.css'
import Section from '@/components/common/Section/Section'

export default function Team() {
	return (
		<Section id='team' headerText='Team'>
			<div className={styles.teamSection}>TEAM</div>
		</Section>
	)
}
