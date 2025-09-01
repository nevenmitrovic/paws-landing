import type { IconType } from 'react-icons'
import styles from './footer-social.module.css'

import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaDribbble } from 'react-icons/fa'
import { PiHandPeace } from 'react-icons/pi'

interface Social {
	icon: IconType
	href: string
}

const SOCIAL: Social[] = [
	{
		icon: FaTwitter,
		href: 'https://twitter.com',
	},
	{
		icon: FaLinkedin,
		href: 'https://linkedin.com',
	},
	{
		icon: FaGithub,
		href: 'https://github.com',
	},
	{
		icon: FaFacebook,
		href: 'https://facebook.com',
	},
	{
		icon: FaDribbble,
		href: 'https://dribbble.com',
	},
	{
		icon: PiHandPeace,
		href: '#',
	},
]

export default function FooterSocial() {
	return (
		<div className='wrapper'>
			<div className={styles.footerSocial}>
				<p>© 2024 Paws n’ Play. All rights reserved.</p>
				<nav>
					{SOCIAL.map((item) => {
						const Icon = item.icon
						return (
							<a key={item.href} href={item.href}>
								<Icon />
							</a>
						)
					})}
				</nav>
			</div>
		</div>
	)
}
