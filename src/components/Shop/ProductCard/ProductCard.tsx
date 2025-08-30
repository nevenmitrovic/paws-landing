import styles from './product-cards.module.css'

interface ProducCardProps {
	backgroundPosition: string
}

export default function ProductCard({ backgroundPosition }: ProducCardProps) {
	return (
		<article className={styles.productCard} style={{ backgroundPosition: backgroundPosition }} />
	)
}
