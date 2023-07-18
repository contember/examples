import * as React from 'react'
import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, Stack } from '@contember/admin'
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
					<LinkButton to="admin/ticketType/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Ticket types
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/ticketType/edit(id: $entity.id)">
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
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Tickets
								</h2>
								<LinkButton to="admin/ticket/create">
									Create new ticket
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Ticket[ticketType.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/ticket/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="attendee" header="attendee" options="User.name" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
