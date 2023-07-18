import * as React from 'react'
import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Event detail
			</Title>
			<DetailScope entity="Event(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/event/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Events
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/event/edit(id: $entity.id)">
						Edit event
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="startDate" label="Start date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="endDate" label="End date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="venue.name" label="Venue" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="organizer.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Speakers
								</h2>
								<LinkButton to="admin/speaker/create">
									Create new speaker
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Speaker[events.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/speaker/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Sponsors
								</h2>
								<LinkButton to="admin/sponsor/create">
									Create new sponsor
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Sponsor[events.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/sponsor/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Ticket types
								</h2>
								<LinkButton to="admin/ticketType/create">
									Create new ticket type
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="TicketType[event.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/ticketType/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="type" field="type" header="Type" />
							<NumberCell key="price" field="price" header="Price" />
							<NumberCell key="availableTickets" field="availableTickets" header="Available ticket" />
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