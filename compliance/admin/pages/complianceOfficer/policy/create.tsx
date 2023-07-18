import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PolicyForm } from '../../../components/forms/PolicyForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create policy
			</Title>
			<CreateScope entity="Policy" redirectOnSuccess="complianceOfficer/policy/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create policy" labelSaved="Create policy" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/policy/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Policies
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PolicyForm />
				</>
			</CreateScope>
		</>
	)
}
