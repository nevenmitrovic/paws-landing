import styles from './hero-section.module.css'
import logo from '@/assets/images/logo.png'

export default function HeroSection() {
	return (
		<section id='hero' className={styles.backgroundImg}>
			<div className={`wrapper ${styles.heroSection}`}>
				<div className={styles.heroTitleWrapper}>
					<h1>Pawsitively Perfect: Where Every Pet's Dream Comes True!</h1>
					<p>
						Welcome to Paws n’ Play, the ultimate destination for pet lovers! Explore a world of
						tail-wagging joy and furry companionship with our wide range of products and services.
						From pampering essentials to playful toys, we're here to make every moment with your pet
						pawsitively perfect!"
					</p>
				</div>
				<div>
					<a href='#shop'>
						<button>
							Shop Now <img src={logo} alt='paws' height='22px' width='22px' />
						</button>
					</a>
				</div>
			</div>
		</section>
	)
}
