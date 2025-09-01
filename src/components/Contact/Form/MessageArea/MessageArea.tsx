import { useController, type UseControllerProps } from 'react-hook-form'
import { type FormValues } from '@/components/Contact/Form/Form'

import styles from './message-area.module.css'

interface MessageAreaProps {
	label: string
	name: string
	controllerProps: UseControllerProps<FormValues>
}

export default function MessageArea({ label, name, controllerProps }: MessageAreaProps) {
	const { field } = useController(controllerProps)

	return (
		<div className={styles.areaContainer}>
			<label htmlFor={name}>{label}</label>
			<textarea {...field} name={name} value={field.value as string} />
		</div>
	)
}
