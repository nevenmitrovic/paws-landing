import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import styles from './subscribe.module.css'
import Input from '@/components/common/Input/Input'
import {
	TOAST_ERROR_ID,
	TOAST_LOADING_ID,
	TOAST_SUCCESS_ID,
	RULES,
} from '@/components/Contact/Form/Form'

export interface SubscribeValue {
	subscribeEmail: string
}

export default function Subscribe() {
	const { handleSubmit, control, reset } = useForm<SubscribeValue>({
		defaultValues: {
			subscribeEmail: '',
		},
		mode: 'onChange',
	})
	const onSubmit = async (data: SubscribeValue) => {
		toast.loading('Sending message...', { toastId: TOAST_LOADING_ID })
		await new Promise((resolve) => setTimeout(resolve, 500))

		toast.dismiss(TOAST_LOADING_ID)
		toast.success(`You are subscribed on ${data.subscribeEmail}.`, { toastId: TOAST_SUCCESS_ID })
		reset()
	}
	const onInvalid = (errors: any) => {
		const firstError = Object.values(errors)[0] as any
		toast.error(firstError?.message, {
			toastId: TOAST_ERROR_ID,
		})
	}

	return (
		<div className={styles.subscribe}>
			<div>
				<h3>Join our newsletter</h3>
				<p>Be the first to receive latest updates on promo, sales and offers</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit, onInvalid)}>
				<Input
					name='subscribe'
					type='email'
					placeholder='Enter your email'
					bgColor='var(--clr-very-light-gray-2)'
					controllerProps={{
						control,
						name: 'subscribeEmail',
						rules: {
							required: RULES.required,
							pattern: RULES.email,
						},
					}}
				/>
				<button type='submit'>Subscribe</button>
			</form>
		</div>
	)
}
