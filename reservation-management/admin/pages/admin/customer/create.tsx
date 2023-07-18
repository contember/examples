import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CustomerForm } from '../../../components/forms/CustomerForm'
import { SlotSources, Title } from '../../../components/Slots'
import { useInviteUser } from '../../../hooks/useInviteUser'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {

	const invite = useInviteUser([{ role: 'customer', variables: [] }])
	const inviteRef = React.useRef(invite)
	inviteRef.current = invite
	
	return (
		<>
			<Title>
				Create customer
			</Title>
			<CreateScope
				entity="Customer"
				redirectOnSuccess="admin/customer/detail(id: $entity.id)"
				onBeforePersist={accessor => inviteRef.current(accessor)}
			>
				<SlotSources.Actions>
					<PersistButton labelSave="Create customer" labelSaved="Create customer" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/customer/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Customers
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CustomerForm />
				</>
			</CreateScope>
		</>
	)
}
