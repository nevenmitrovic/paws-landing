import styles from './footer-links.module.css'
import type { LinkCardProps } from '@/components/Footer/FooterContent/FooterLinks/LinkCard/LinkCard'
import LinkCard from '@/components/Footer/FooterContent/FooterLinks/LinkCard/LinkCard'

const LINKS_DATA: LinkCardProps[] = [
	{
		title: 'Shop',
		links: [
			{ label: 'Adoption', href: '#' },
			{ label: 'Nutrition', href: '#' },
			{ label: 'Pet Care', href: '#' },
			{ label: 'Pet Food', href: '#' },
			{ label: 'Pricing', href: '#' },
		],
	},
	{
		title: 'Services',
		links: [
			{ label: 'Grooming', href: '#' },
			{ label: 'Boarding', href: '#' },
			{ label: 'Training', href: '#' },
			{ label: 'Veterinary', href: '#' },
			{ label: 'Support', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About Us', href: '#' },
			{ label: 'Careers', href: '#' },
			{ label: 'Press', href: '#' },
			{ label: 'News', href: '#' },
			{ label: 'Contact', href: '#' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Terms', href: '#' },
			{ label: 'Privacy', href: '#' },
			{ label: 'Cookies', href: '#' },
			{ label: 'Security', href: '#' },
			{ label: 'Settings', href: '#' },
		],
	},
	{
		title: 'Social',
		links: [
			{ label: 'Instagram', href: '#' },
			{ label: 'LinkedIn', href: '#' },
			{ label: 'Facebook', href: '#' },
			{ label: 'Twitter', href: '#' },
			{ label: 'Dribbble', href: '#' },
		],
	},
]

export default function FooterLinks() {
	return (
		<nav className={styles.footerLinks}>
			{LINKS_DATA.map((data) => (
				<LinkCard key={data.title} {...data} />
			))}
		</nav>
	)
}
