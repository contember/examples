import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { LeadForm } from '../../../components/forms/LeadForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit lead
			</Title>
			<EditScope entity="Lead(id=$id)" redirectOnSuccess="salesRepresentative/lead/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="salesRepresentative/lead/detail(id: $entity.id)"
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
				<LeadForm />
			</EditScope>
		</>
	)
}
