import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { IncidentForm } from '../../../components/forms/IncidentForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create incident
			</Title>
			<CreateScope entity="Incident" redirectOnSuccess="complianceOfficer/incident/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create incident" labelSaved="Create incident" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/incident/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Incidents
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<IncidentForm />
				</>
			</CreateScope>
		</>
	)
}
