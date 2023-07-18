import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ProjectForm } from '../../../components/forms/ProjectForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create project
			</Title>
			<CreateScope entity="Project" redirectOnSuccess="manager/project/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create project" labelSaved="Create project" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="manager/project/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Projects
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ProjectForm />
				</>
			</CreateScope>
		</>
	)
}
