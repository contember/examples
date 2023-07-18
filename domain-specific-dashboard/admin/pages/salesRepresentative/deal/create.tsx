import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DealForm } from '../../../components/forms/DealForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create deal
			</Title>
			<CreateScope entity="Deal" redirectOnSuccess="salesRepresentative/deal/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create deal" labelSaved="Create deal" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/deal/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Deals
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<DealForm />
				</>
			</CreateScope>
		</>
	)
}
