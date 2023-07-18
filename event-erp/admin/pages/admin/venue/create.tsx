import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { VenueForm } from '../../../components/forms/VenueForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create venue
			</Title>
			<CreateScope entity="Venue" redirectOnSuccess="admin/venue/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create venue" labelSaved="Create venue" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/venue/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Venues
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<VenueForm />
				</>
			</CreateScope>
		</>
	)
}
