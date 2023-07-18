import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Ticket type detail
			</Title>
			<DetailScope entity="TicketType(id=$id)">
				<SlotSources.Back>
					<LinkButton to="eventOrganizer/ticketType/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Ticket types
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="eventOrganizer/ticketType/edit(id: $entity.id)">
						Edit ticket type
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="type" label="Type" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="price" label="Price" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="availableTickets" label="Available ticket" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="event.name" label="Event" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
