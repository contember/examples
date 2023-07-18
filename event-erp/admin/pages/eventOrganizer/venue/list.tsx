import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Venues
			</Title>
			<SlotSources.Actions>
				<LinkButton to="eventOrganizer/venue/create">
					Create new venue
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Venue" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="eventOrganizer/venue/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
			</DataGridScope>
		</>
	)
}
