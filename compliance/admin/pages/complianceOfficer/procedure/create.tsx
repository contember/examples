import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ProcedureForm } from '../../../components/forms/ProcedureForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create procedure
			</Title>
			<CreateScope entity="Procedure" redirectOnSuccess="complianceOfficer/procedure/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create procedure" labelSaved="Create procedure" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/procedure/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Procedures
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ProcedureForm />
				</>
			</CreateScope>
		</>
	)
}
