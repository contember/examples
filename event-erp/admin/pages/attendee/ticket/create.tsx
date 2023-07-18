import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { TicketForm } from '../../../components/forms/TicketForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create ticket
			</Title>
			<CreateScope entity="Ticket" redirectOnSuccess="attendee/ticket/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create ticket" labelSaved="Create ticket" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="attendee/ticket/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Tickets
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<TicketForm />
				</>
			</CreateScope>
		</>
	)
}
