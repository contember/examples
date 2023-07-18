import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { UserForm } from '../../../components/forms/UserForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create user
			</Title>
			<CreateScope entity="User" redirectOnSuccess="salesRepresentative/user/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create user" labelSaved="Create user" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<UserForm />
				</>
			</CreateScope>
		</>
	)
}
