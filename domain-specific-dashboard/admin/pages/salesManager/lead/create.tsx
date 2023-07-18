import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { LeadForm } from '../../../components/forms/LeadForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create lead
			</Title>
			<CreateScope entity="Lead" redirectOnSuccess="salesManager/lead/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create lead" labelSaved="Create lead" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesManager/lead/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Leads
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<LeadForm />
				</>
			</CreateScope>
		</>
	)
}
