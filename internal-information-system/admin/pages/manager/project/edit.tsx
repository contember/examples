import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ProjectForm } from '../../../components/forms/ProjectForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit project
			</Title>
			<EditScope entity="Project(id=$id)" redirectOnSuccess="manager/project/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="manager/project/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ProjectForm />
			</EditScope>
		</>
	)
}
