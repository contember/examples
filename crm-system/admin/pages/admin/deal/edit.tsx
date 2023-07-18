import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DealForm } from '../../../components/forms/DealForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit deal
			</Title>
			<EditScope entity="Deal(id=$id)" redirectOnSuccess="admin/deal/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/deal/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<DealForm />
			</EditScope>
		</>
	)
}
