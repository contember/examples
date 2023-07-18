import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MilestoneForm } from '../../../components/forms/MilestoneForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create milestone
			</Title>
			<CreateScope entity="Milestone" redirectOnSuccess="admin/milestone/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create milestone" labelSaved="Create milestone" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/milestone/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Milestones
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<MilestoneForm />
				</>
			</CreateScope>
		</>
	)
}
