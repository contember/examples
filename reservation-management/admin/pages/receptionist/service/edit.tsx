import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ServiceForm } from '../../../components/forms/ServiceForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit service
			</Title>
			<EditScope entity="Service(id=$id)" redirectOnSuccess="receptionist/service/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="receptionist/service/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ServiceForm />
			</EditScope>
		</>
	)
}
