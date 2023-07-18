import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Tickets
			</Title>
			<SlotSources.Actions>
				<LinkButton to="attendee/ticket/create">
					Create new ticket
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Ticket" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="attendee/ticket/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="attendee" header="attendee" options="User.name" />
			</DataGridScope>
		</>
	)
}
