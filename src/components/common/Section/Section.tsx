import SectionHeader from '@/components/common/Section/SectionHeader/SectionHeader'
import styles from './section.module.css'

interface SectionProps {
	id: string
	headerText: string
	children: React.ReactNode
}

export default function Section({ id, headerText, children }: SectionProps) {
	return (
		<section id={id} className={`wrapper ${styles.section}`}>
			<SectionHeader text={headerText} />
			{children}
		</section>
	)
}
