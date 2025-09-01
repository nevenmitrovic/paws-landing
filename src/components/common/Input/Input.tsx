import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form'

import styles from './input.module.css'

interface InputProps<T extends FieldValues> {
	name: string
	label?: string
	placeholder: string
	type: 'text' | 'email'
	controllerProps: UseControllerProps<T>
	bgColor?: 'var(--clr-primary-text)' | 'var(--clr-very-light-gray-2)'
}

export default function Input<T extends FieldValues>({
	name,
	label,
	type,
	bgColor = 'var(--clr-primary-text)',
	placeholder,
	controllerProps,
}: InputProps<T>) {
	const { field } = useController(controllerProps)

	return (
		<div className={styles.inputContainer}>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				{...field}
				name={name}
				type={type}
				placeholder={placeholder}
				value={field.value as string}
				style={{ backgroundColor: bgColor }}
			/>
		</div>
	)
}
