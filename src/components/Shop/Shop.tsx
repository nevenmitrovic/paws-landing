import { useState } from 'react'

import SectionHeader from '@/components/common/SectionHeader/SectionHeader'
import styles from './shop.module.css'
import ProductCard from '@/components/Shop/ProductCard/ProductCard'
import { useIsMobile } from '@/hooks/useIsMobile'

const BUTTONS = ['random', 'cat', 'dogs', 'fish', 'birds']
const PRODUCTS = [{ cat: ['bottom left', 'bottom right'], dogs: ['top left', 'top right'] }]

export default function Shop() {
	const isMobile = useIsMobile()
	const [selectedCategory, setSelectedCategory] = useState('random')

	const handleSelectedCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedCategory(e.currentTarget.value)
	}

	return (
		<section id='shop' className={`wrapper sectionPaddingY ${styles.shopSection}`}>
			<SectionHeader text='Shop' />
			<div className={styles.commerce}>
				<h3>Featured Products</h3>
				<div className={styles.controllers}>
					{BUTTONS.map((button) => {
						return (
							<button
								key={button}
								className={selectedCategory === button ? styles.active : styles.inactive}
								value={button}
								onClick={handleSelectedCategory}
							>
								{button.charAt(0).toUpperCase() + button.slice(1)}
							</button>
						)
					})}
				</div>
				<div className={styles.productCards}>
					{isMobile &&
						PRODUCTS.map((product) =>
							product['cat'].map((bgPosition) => (
								<ProductCard key={bgPosition} backgroundPosition={bgPosition} />
							))
						)}
					{!isMobile &&
						PRODUCTS.map((product) =>
							Object.entries(product).map(([_key, value]) =>
								value.map((bgPosition: string) => (
									<ProductCard key={bgPosition} backgroundPosition={bgPosition} />
								))
							)
						)}
				</div>
			</div>
		</section>
	)
}
