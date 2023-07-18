import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MaintenanceTaskForm } from '../../../components/forms/MaintenanceTaskForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create maintenance task
			</Title>
			<CreateScope entity="MaintenanceTask" redirectOnSuccess="assetManager/maintenanceTask/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create maintenance task" labelSaved="Create maintenance task" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="assetManager/maintenanceTask/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Maintenance tasks
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<MaintenanceTaskForm />
				</>
			</CreateScope>
		</>
	)
}
