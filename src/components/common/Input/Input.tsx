import styles from './input.module.css'

interface InputProps {
	name: string
	label: string
	placeholder: string
	type: 'text' | 'email'
}

export default function Input({ name, label, type, placeholder }: InputProps) {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={name}>{label}</label>
			<input name={name} type={type} placeholder={placeholder} />
		</div>
	)
}
