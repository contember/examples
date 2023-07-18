import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ServiceForm } from '../../../components/forms/ServiceForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create service
			</Title>
			<CreateScope entity="Service" redirectOnSuccess="admin/service/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create service" labelSaved="Create service" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/service/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Services
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ServiceForm />
				</>
			</CreateScope>
		</>
	)
}
