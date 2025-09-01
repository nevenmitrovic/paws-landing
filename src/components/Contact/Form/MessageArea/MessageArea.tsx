import styles from './message-area.module.css'

interface MessageAreaProps {
	label: string
	name: string
}

export default function MessageArea({ label, name }: MessageAreaProps) {
	return (
		<div className={styles.areaContainer}>
			<label htmlFor={name}>{label}</label>
			<textarea name={name} />
		</div>
	)
}
