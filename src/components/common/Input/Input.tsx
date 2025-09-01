import { useController, type UseControllerProps } from 'react-hook-form'

import styles from './input.module.css'
import { type FormValues } from '@/components/Contact/Form/Form'

interface InputProps {
	name: string
	label: string
	placeholder: string
	type: 'text' | 'email'
	controllerProps: UseControllerProps<FormValues>
}

export default function Input({ name, label, type, placeholder, controllerProps }: InputProps) {
	const { field } = useController(controllerProps)

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={name}>{label}</label>
			<input
				{...field}
				name={name}
				type={type}
				placeholder={placeholder}
				value={field.value as string}
			/>
		</div>
	)
}
