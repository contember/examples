import * as React from 'react'
import { BooleanCell, DataGridScope, EnumCell, GenericCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Rooms
			</Title>
			<SlotSources.Actions>
				<LinkButton to="receptionist/room/create">
					Create new room
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Room" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="receptionist/room/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<EnumCell
					options={{ single: 'single', double: 'double', suite: 'suite' }}
					key="type"
					field="type"
					header="Type"
				/>
				<NumberCell key="capacity" field="capacity" header="Capacity" />
				<NumberCell key="pricePerNight" field="pricePerNight" header="Price per night" />
				<BooleanCell key="availability" field="availability" header="Availability" />
			</DataGridScope>
		</>
	)
}
