import styles from './form.module.css'
import Input from '@/components/common/Input/Input'
import MessageArea from '@/components/Contact/Form/MessageArea/MessageArea'
import Checkbox from '@/components/Contact/Form/Checkbox/Checkbox'

export default function Form() {
	return (
		<form>
			<div className={styles.inputsContainer}>
				<div>
					<Input name='firstName' type='text' placeholder='First name' label='First name' />
					<Input name='lastName' type='text' placeholder='Last name' label='Last name' />
				</div>
				<Input name='email' type='email' placeholder='you@company.com' label='Email' />
				<MessageArea label='Message' name='message' />
				<Checkbox name='checkbox' />
			</div>
			<button>Send message</button>
		</form>
	)
}
