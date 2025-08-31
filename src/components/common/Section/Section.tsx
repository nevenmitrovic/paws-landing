import SectionHeader from '@/components/common/Section/SectionHeader/SectionHeader'
import styles from './section.module.css'

interface SectionProps {
	id: string
	headerText: string
	children: React.ReactNode
	backgroundColor?: '--clr-primary-text' | '--clr-secondary-text'
}

export default function Section({
	id,
	headerText,
	children,
	backgroundColor = '--clr-primary-text',
}: SectionProps) {
	return (
		<section
			id={id}
			className={`wrapper ${styles.section}`}
			style={{ backgroundColor: `var(${backgroundColor})` }}
		>
			<SectionHeader text={headerText} textColor={backgroundColor} />
			{children}
		</section>
	)
}
