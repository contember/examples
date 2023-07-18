import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MaintenanceTaskForm } from '../../../components/forms/MaintenanceTaskForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit maintenance task
			</Title>
			<EditScope entity="MaintenanceTask(id=$id)" redirectOnSuccess="admin/maintenanceTask/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="admin/maintenanceTask/detail(id: $entity.id)"
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
				<MaintenanceTaskForm />
			</EditScope>
		</>
	)
}