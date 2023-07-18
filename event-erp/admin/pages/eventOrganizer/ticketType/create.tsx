import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TicketTypeForm } from '../../../components/forms/TicketTypeForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create ticket type
			</Title>
			<CreateScope entity="TicketType" redirectOnSuccess="eventOrganizer/ticketType/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create ticket type" labelSaved="Create ticket type" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="eventOrganizer/ticketType/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Ticket types
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<TicketTypeForm />
				</>
			</CreateScope>
		</>
	)
}
