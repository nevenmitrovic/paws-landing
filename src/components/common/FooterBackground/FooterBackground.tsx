import type { ReactNode } from 'react'
import styles from './footer-background.module.css'

interface FooterBackgroundProps {
	children: ReactNode
}

export default function FooterBackground({ children }: FooterBackgroundProps) {
	return <div className={styles.footerBackground}>{children}</div>
}
