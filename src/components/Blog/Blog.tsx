import styles from './blog.module.css'
import Section from '@/components/common/Section/Section'

export default function Blog() {
	return (
		<Section id='blog' headerText='Blog'>
			<div className={styles.blogSection}>BLOG</div>
		</Section>
	)
}
