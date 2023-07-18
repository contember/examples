import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PolicyForm } from '../../../components/forms/PolicyForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit policy
			</Title>
			<EditScope entity="Policy(id=$id)" redirectOnSuccess="complianceOfficer/policy/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="complianceOfficer/policy/detail(id: $entity.id)"
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
				<PolicyForm />
			</EditScope>
		</>
	)
}
