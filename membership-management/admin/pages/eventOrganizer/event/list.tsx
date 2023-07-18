import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
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
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="date" field="date" header="Date" />
				<DateCell key="time" field="time" header="Time" />
				<TextCell key="location" field="location" header="Location" />
			</DataGridScope>
		</>
	)
}
