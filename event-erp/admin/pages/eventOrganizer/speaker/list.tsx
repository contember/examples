import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Speakers
			</Title>
			<SlotSources.Actions>
				<LinkButton to="eventOrganizer/speaker/create">
					Create new speaker
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Speaker" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="eventOrganizer/speaker/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
			</DataGridScope>
		</>
	)
}
