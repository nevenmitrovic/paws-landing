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
				borderBottom:
					textColor === '--clr-primary-text'
						? '0.2px solid rgb(0, 0, 0, 0.2)'
						: '0.2px solid rgb(255, 255, 255, 0.2)',
			}}
		>
			<img src={textColor === '--clr-primary-text' ? paws : whitePaws} alt='paws print' />
			{text}
		</header>
	)
}
