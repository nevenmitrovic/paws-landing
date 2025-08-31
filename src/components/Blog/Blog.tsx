import { useIsMobile } from '@/hooks/useIsMobile'
import styles from './blog.module.css'
import Section from '@/components/common/Section/Section'
import YouTubePlayer from '@/components/Blog/YouTubePlayer/YouTubePlayer'

export default function Blog() {
	const isMobile = useIsMobile()

	return (
		<Section id='blog' headerText='Blog'>
			<div className={styles.blogSection}>
				<div className={styles.blogContent}>
					<h2>Milestone: 20,000 Pets Treated</h2>
					<section>
						<p>
							Eget quis mi enim, leo lacinia pharetra, semper. Eget in <u>volutpat mollis</u> at
							volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at
							habitant diam at. Suscipit <u>tristique risus</u>, at donec. In turpis vel et quam
							imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. Eget quis mi enim, leo
							lacinia pharetra, semper. Eget in <u>volutpat mollis</u> at volutpat lectus velit, sed
							auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit{' '}
							<u>tristique risus</u>, at donec. In turpis vel et quam imperdiet. Ipsum molestie
							aliquet sodales id est ac volutpat.
						</p>
					</section>
					<section>
						<h3>Renewed target</h3>
						<p>
							Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam
							ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu.
							Maecenas est morbi mattis id in ac.
						</p>
					</section>
					<button>Read more</button>
				</div>
				{!isMobile && <YouTubePlayer />}
			</div>
		</Section>
	)
}
