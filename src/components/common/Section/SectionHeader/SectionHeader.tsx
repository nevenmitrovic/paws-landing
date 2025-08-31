import styles from './section-header.module.css'
import paws from '@/assets/images/paws-header-print.png'

interface SectionHeaderProps {
	text: string
}

export default function SectionHeader({ text }: SectionHeaderProps) {
	return (
		<header className={styles.sectionHeader}>
			<img src={paws} alt='paws print' />
			{text}
		</header>
	)
}
