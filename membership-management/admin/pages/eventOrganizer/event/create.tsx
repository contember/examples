import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { EventForm } from '../../../components/forms/EventForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create event
			</Title>
			<CreateScope entity="Event" redirectOnSuccess="eventOrganizer/event/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create event" labelSaved="Create event" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="eventOrganizer/event/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Events
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<EventForm />
				</>
			</CreateScope>
		</>
	)
}
