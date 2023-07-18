import { Stack } from '@contember/admin'
import { Title } from '../components/Slots'

export default () => (
	<>
		<Title>Reservation Management</Title>
		<Stack direction="vertical" gap="none">
			<p>
				Welcome to your new web app! You're now looking at an empty
				dashboard, ready to be customized to suit the needs of your unique
				web app. To get started, visit our documentation at
				docs.contember.com, where you'll find helpful tips and resources for
				tailoring your dashboard.
			</p>
			<p>
				As you explore your new project, remember Contember Studio is a beta
				version and that we value your feedback. Don't hesitate to share
				your thoughts and experiences with us, as it helps us improve and
				enhance Contember for all users.
			</p>
			<p>Happy customizing, and enjoy your new web app!</p>
		</Stack>
	</>
)
