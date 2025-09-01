import { useController, type UseControllerProps } from 'react-hook-form'
import { type FormValues } from '@/components/Contact/Form/Form'

import styles from './checkbox.module.css'

interface CheckboxProps {
	name: string
	controllerProps: UseControllerProps<FormValues>
}

export default function Checkbox({ name, controllerProps }: CheckboxProps) {
	const { field } = useController(controllerProps)

	return (
		<div className={styles.checkboxContainer}>
			<input
				type='checkbox'
				name={name}
				checked={field.value as boolean}
				onChange={field.onChange}
			/>
			<span>
				You agree to our friendly <a href='#'>privacy policy</a>.
			</span>
		</div>
	)
}
