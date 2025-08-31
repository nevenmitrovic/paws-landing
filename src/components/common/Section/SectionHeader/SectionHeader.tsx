import styles from './section-header.module.css'
import paws from '@/assets/images/paws-header-print.png'
import whitePaws from '@/assets/images/white-paws.png'

interface SectionHeaderProps {
	text: string
	textColor: '--clr-primary-text' | '--clr-secondary-text'
}

export default function SectionHeader({
	text,
	textColor = '--clr-primary-text',
}: SectionHeaderProps) {
	return (
		<header
			className={styles.sectionHeader}
			style={{
				color:
					textColor === '--clr-primary-text'
						? 'var(--clr-secondary-text)'
						: 'var(--clr-primary-text)',
			}}
		>
			<img src={textColor === '--clr-primary-text' ? paws : whitePaws} alt='paws print' />
			{text}
		</header>
	)
}
