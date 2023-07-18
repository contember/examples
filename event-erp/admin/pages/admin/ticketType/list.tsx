import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Ticket types
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/ticketType/create">
					Create new ticket type
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="TicketType" itemsPerPage={50}>
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
			</DataGridScope>
		</>
	)
}
