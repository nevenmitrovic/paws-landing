import { useIsMobile } from '@/hooks/useIsMobile'
import { FaAngleDown } from 'react-icons/fa'
import styles from './navigation.module.css'

export default function Navigation() {
	const isMobile = useIsMobile()

	return (
		<>
			{!isMobile && (
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
			)}
		</>
	)
}
