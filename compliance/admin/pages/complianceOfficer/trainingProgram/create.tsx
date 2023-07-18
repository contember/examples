import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TrainingProgramForm } from '../../../components/forms/TrainingProgramForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create training program
			</Title>
			<CreateScope
				entity="TrainingProgram"
				redirectOnSuccess="complianceOfficer/trainingProgram/detail(id: $entity.id)"
			>
				<SlotSources.Actions>
					<PersistButton labelSave="Create training program" labelSaved="Create training program" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/trainingProgram/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Training programs
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<TrainingProgramForm />
				</>
			</CreateScope>
		</>
	)
}
