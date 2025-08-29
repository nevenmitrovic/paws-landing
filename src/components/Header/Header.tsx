import styles from './header.module.css'
import logo from '@/assets/images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				{/* LOGO */}
				<div className={styles.logo}>
					<img src={logo} width={27.09400177001953} height={24.540000915527344} />
					<h3>Paws n’ Play</h3>
				</div>

				{/* NAVLINKS */}
				<nav>
					<ul className={styles.navMenu}>
						<li>
							<button>
								Shop <FaAngleDown size={20} />
							</button>
						</li>
						<li>
							<button>
								Services <FaAngleDown size={20} />
							</button>
						</li>
						<li>
							<button>About us</button>
						</li>
						<li>
							<button>Blog</button>
						</li>
						<li>
							<button>Contact</button>
						</li>
					</ul>
				</nav>
			</div>

			{/* NAVIGATION ACTION */}
			<div>
				<button className={styles.navAction}>GET STARTED</button>
			</div>

			{/* MOBILE MENU BUTTON */}
			<button className={styles.mobileMenu}>
				<HiMenuAlt3 size={30} />
			</button>
		</header>
	)
}
