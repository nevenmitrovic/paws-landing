import { useState } from 'react'

import SectionHeader from '@/components/common/SectionHeader/SectionHeader'
import styles from './shop.module.css'
import ProductCard from '@/components/Shop/ProductCard/ProductCard'
import { useIsMobile } from '@/hooks/useIsMobile'
import productsImg from '@/assets/images/products.png'
import petPlateImg from '@/assets/images/pet-plate.png'
import dogWaterImg from '@/assets/images/dog-water.png'
import birdWaterImg from '@/assets/images/bird-water.png'

const BUTTONS = ['random', 'cat', 'dogs', 'fish', 'birds']
const PRODUCTS = {
	cat: [
		{
			url: productsImg,
			title: 'Multivitamin For Cat',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
			bgPosition: 'bottom left',
		},
		{
			url: productsImg,
			bgPosition: 'bottom right',
			title: 'Cat Food',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
		},
	],
	dogs: [
		{
			url: productsImg,
			bgPosition: 'top left',
			title: 'Dog Food',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
		},
		{
			url: productsImg,
			bgPosition: 'top right',
			title: 'Multivitamin For Dog',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
		},
		{
			url: petPlateImg,
			title: 'Pet Plate',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
		},
		{
			url: dogWaterImg,
			bgPosition: 'top left',
			title: 'Dog Water',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
		},
	],
	birds: [
		{
			url: birdWaterImg,
			title: 'Bird Water',
			desc: 'Lorem ipsum dolor sit amet consectetur. Vitae donec pellentesque ut eget tempor egestas diam.',
			price: 15000,
		},
	],
	fish: [],
}

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
				<div className={styles.productCardsContainer}>
					<div className={styles.productCards}>
						<ProductCard
							backgroundPosition={PRODUCTS.cat[0].bgPosition}
							url={PRODUCTS.cat[0].url}
							price={PRODUCTS.cat[0].price}
							title={PRODUCTS.cat[0].title}
							desc={PRODUCTS.cat[0].desc}
						/>
					</div>
					{!isMobile && <button>View More {`>>>`}</button>}
				</div>
			</div>
		</section>
	)
}
