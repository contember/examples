import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TaskForm } from '../../../components/forms/TaskForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit task
			</Title>
			<EditScope entity="Task(id=$id)" redirectOnSuccess="salesRepresentative/task/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="salesRepresentative/task/detail(id: $entity.id)"
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
				<TaskForm />
			</EditScope>
		</>
	)
}
