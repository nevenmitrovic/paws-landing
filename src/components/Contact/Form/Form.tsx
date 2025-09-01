import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import styles from './form.module.css'
import Input from '@/components/common/Input/Input'
import MessageArea from '@/components/Contact/Form/MessageArea/MessageArea'
import Checkbox from '@/components/Contact/Form/Checkbox/Checkbox'

export const TOAST_ERROR_ID = 'toast-error'
export const TOAST_LOADING_ID = 'toast-loading'
export const TOAST_SUCCESS_ID = 'toast-success'
export const RULES = {
	required: {
		value: true,
		message: 'All fields are required',
	},
	email: {
		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
		message: 'Please enter a valid email address',
	},
	minLength: (length: number) => ({
		value: length,
		message: `Minimum ${length} characters required`,
	}),
	maxLength: (length: number) => ({
		value: length,
		message: `Maximum ${length} characters allowed`,
	}),
}

export interface FormValues {
	firstName: string
	lastName: string
	email: string
	message: string
	checkbox: boolean
}

export default function Form() {
	const { handleSubmit, control, reset } = useForm<FormValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
			checkbox: false,
		},
		mode: 'onChange',
	})
	const onSubmit = async (data: FormValues) => {
		toast.loading('Sending message...', { toastId: TOAST_LOADING_ID })
		await new Promise((resolve) => setTimeout(resolve, 500))

		toast.dismiss(TOAST_LOADING_ID)
		toast.success(
			`Message sent, ${
				data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase()
			}`,
			{ toastId: TOAST_SUCCESS_ID }
		)
		reset()
	}
	const onInvalid = (errors: any) => {
		const firstError = Object.values(errors)[0] as any
		toast.error(firstError?.message, {
			toastId: TOAST_ERROR_ID,
		})
	}

	return (
		<form className={styles.contactForm} onSubmit={handleSubmit(onSubmit, onInvalid)}>
			<div className={styles.inputsContainer}>
				<div>
					<Input
						name='firstName'
						type='text'
						placeholder='First name'
						label='First name'
						controllerProps={{
							control,
							name: 'firstName',
							rules: {
								required: RULES.required,
								minLength: RULES.minLength(2),
								maxLength: RULES.maxLength(50),
							},
						}}
					/>
					<Input
						name='lastName'
						type='text'
						placeholder='Last name'
						label='Last name'
						controllerProps={{
							control,
							name: 'lastName',
							rules: {
								required: RULES.required,
								minLength: RULES.minLength(2),
								maxLength: RULES.maxLength(50),
							},
						}}
					/>
				</div>
				<Input
					name='email'
					type='email'
					placeholder='you@company.com'
					label='Email'
					controllerProps={{
						control,
						name: 'email',
						rules: {
							required: RULES.required,
							pattern: RULES.email,
						},
					}}
				/>
				<MessageArea
					label='Message'
					name='message'
					controllerProps={{
						control,
						name: 'message',
						rules: {
							required: RULES.required,
							maxLength: RULES.maxLength(150),
						},
					}}
				/>
				<Checkbox
					name='checkbox'
					controllerProps={{
						control,
						name: 'checkbox',
						rules: {
							required: RULES.required,
						},
					}}
				/>
			</div>
			<button type='submit'>Send message</button>
		</form>
	)
}
