import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TrainingProgramForm } from '../../../components/forms/TrainingProgramForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit training program
			</Title>
			<EditScope entity="TrainingProgram(id=$id)" redirectOnSuccess="admin/trainingProgram/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="admin/trainingProgram/detail(id: $entity.id)"
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
				<TrainingProgramForm />
			</EditScope>
		</>
	)
}
