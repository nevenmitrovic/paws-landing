import { useEffect, useState } from 'react'

import SectionHeader from '@/components/common/SectionHeader/SectionHeader'
import styles from './shop.module.css'
import ProductCard from '@/components/Shop/ProductCard/ProductCard'
import { useIsMobile } from '@/hooks/useIsMobile'
import productsImg from '@/assets/images/products.png'
import petPlateImg from '@/assets/images/pet-plate.png'
import dogWaterImg from '@/assets/images/dog-water.png'
import birdWaterImg from '@/assets/images/bird-water.png'

type ProductCategories = 'random' | 'cat' | 'dogs' | 'fish' | 'birds'
type ProductsData = Record<Exclude<ProductCategories, 'random'>, ProductDetails[]>
interface ProductDetails {
	url: string
	title: string
	desc: string
	price: number
	bgPosition?: string
}

const BUTTONS: ProductCategories[] = ['random', 'cat', 'dogs', 'fish', 'birds']
const PRODUCTS: ProductsData = {
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

// RANDOM PRODUCTS
function getRandomCategory(): Exclude<ProductCategories, 'random'> {
	const randomIndex = Math.floor(Math.random() * BUTTONS.length)
	if (BUTTONS[randomIndex] === 'random' || BUTTONS[randomIndex] === 'fish') {
		return getRandomCategory()
	}

	return BUTTONS[randomIndex]
}
function getRandomProduct(category: Exclude<ProductCategories, 'random'>): ProductDetails {
	const categoryLength = PRODUCTS[category].length
	const randomIndex = Math.floor(Math.random() * categoryLength)
	return PRODUCTS[category][randomIndex]
}
function getRandomProducts(): ProductDetails[] {
	const randomProducts: ProductDetails[] = []

	while (randomProducts.length < 3) {
		const category = getRandomCategory()
		const randomProduct = getRandomProduct(category)
		const isDuplicate = randomProducts.find((product) => product.title === randomProduct.title)
		if (!isDuplicate) {
			randomProducts.push(randomProduct)
		}
	}

	return randomProducts
}

// FILTER PRODUCTS
function getFilteredProducts(category: Exclude<ProductCategories, 'random'>): ProductDetails[] {
	return PRODUCTS[category]
}

export default function Shop() {
	const isMobile = useIsMobile()
	const [selectedCategory, setSelectedCategory] = useState<ProductCategories>('random')
	const [filteredProducts, setFilteredProducts] = useState<ProductDetails[] | null>(null)

	const handleSelectedCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedCategory(e.currentTarget.value as ProductCategories)
	}
	const handleNextRandom = () => setFilteredProducts(getRandomProducts())

	useEffect(() => {
		const filterProducts = () => {
			switch (selectedCategory) {
				case 'random':
					setFilteredProducts(getRandomProducts())
					break
				case 'cat':
					setFilteredProducts(getFilteredProducts(selectedCategory))
					break
				case 'fish':
					setFilteredProducts(getFilteredProducts(selectedCategory))
					break
				case 'birds':
					setFilteredProducts(getFilteredProducts(selectedCategory))
					break
				case 'dogs':
					setFilteredProducts(getFilteredProducts(selectedCategory))
					break
				default:
					setFilteredProducts(null)
			}
		}

		filterProducts()
	}, [selectedCategory])

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
					<div
						className={`${styles.productCards} ${filteredProducts?.length === 0 && styles.noItems}`}
					>
						{filteredProducts?.map((product) => (
							<ProductCard
								key={`product-card ${product.title}`}
								url={product.url}
								backgroundPosition={product.bgPosition}
								price={product.price}
								title={product.title}
								desc={product.desc}
							/>
						))}
						{filteredProducts?.length === 0 && <p>The selected category has no items.</p>}
					</div>
					{!isMobile && selectedCategory === 'random' && (
						<button onClick={handleNextRandom}>View More {`>>>`}</button>
					)}
				</div>
			</div>
		</section>
	)
}
