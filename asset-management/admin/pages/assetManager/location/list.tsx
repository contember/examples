import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Locations
			</Title>
			<SlotSources.Actions>
				<LinkButton to="assetManager/location/create">
					Create new location
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Location" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="assetManager/location/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
			</DataGridScope>
		</>
	)
}
