import { useState } from 'react'

import styles from './product-cards.module.css'
import { CiHeart } from 'react-icons/ci'
import useLayer from '@/hooks/useLayer'

interface ProducCardProps {
	backgroundPosition?: string
	url: string
	price: number
	title: string
	desc: string
}

export default function ProductCard({
	backgroundPosition,
	url,
	price,
	title,
	desc,
}: ProducCardProps) {
	const [quantity, setQuantity] = useState(0)
	const [favorite, setFavorite] = useState('white')
	const { ref, showLayer } = useLayer()

	const formatPrice = (price: number) => {
		return price.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
	}
	const toggleFavorite = () => setFavorite((prev) => (prev === 'white' ? 'red' : 'white'))
	const increaseQuantity = () => setQuantity((prev) => prev + 1)
	const decreaseQuantity = () => setQuantity((prev) => prev - 1)

	return (
		<article
			ref={ref}
			className={styles.productCard}
			style={{
				backgroundPosition: backgroundPosition,
				backgroundSize: backgroundPosition ? '200% 200%' : 'cover',
				backgroundImage: `url(${url})`,
			}}
		>
			{showLayer && (
				<div className={styles.productDetails}>
					<header>
						<div>₦{formatPrice(price)}</div>
						<CiHeart size={25} onClick={toggleFavorite} color={favorite} />
					</header>
					<div className={styles.productInfo}>
						<h3>{title}</h3>
						<p>{desc}</p>
					</div>
					<div className={styles.productControllers}>
						<div>
							<button onClick={increaseQuantity}>+</button>
							<span>{quantity}</span>
							<button onClick={decreaseQuantity}>-</button>
						</div>
						<div>
							<button>Add to cart</button>
						</div>
					</div>
				</div>
			)}
		</article>
	)
}
