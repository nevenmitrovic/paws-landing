import styles from './checkbox.module.css'

interface CheckboxProps {
	name: string
}

export default function Checkbox({ name }: CheckboxProps) {
	return (
		<div className={styles.checkboxContainer}>
			<input name={name} type='checkbox' />
			<span>
				You agree to our friendly <a href='#'>privacy policy</a>.
			</span>
		</div>
	)
}
