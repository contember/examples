import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Events
			</Title>
			<SlotSources.Actions>
				<LinkButton to="eventOrganizer/event/create">
					Create new event
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Event" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="eventOrganizer/event/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<DateCell key="startDate" field="startDate" header="Start date" />
				<DateCell key="endDate" field="endDate" header="End date" />
				<HasOneSelectCell field="venue" header="venue" options="Venue.name" />
			</DataGridScope>
		</>
	)
}
