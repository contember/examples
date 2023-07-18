import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { VenueForm } from '../../../components/forms/VenueForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit venue
			</Title>
			<EditScope entity="Venue(id=$id)" redirectOnSuccess="admin/venue/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/venue/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<VenueForm />
			</EditScope>
		</>
	)
}
