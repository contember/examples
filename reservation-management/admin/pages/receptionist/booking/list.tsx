import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Bookings
			</Title>
			<SlotSources.Actions>
				<LinkButton to="receptionist/booking/create">
					Create new booking
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Booking" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="receptionist/booking/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="customer" header="customer" options="Customer.name" />
				<HasOneSelectCell field="room" header="room" options="Room.description" />
				<DateCell key="checkInDate" field="checkInDate" header="Check in date" />
				<DateCell key="checkOutDate" field="checkOutDate" header="Check out date" />
				<NumberCell key="totalPrice" field="totalPrice" header="Total price" />
				<EnumCell
					options={{ pending: 'pending', confirmed: 'confirmed', canceled: 'canceled' }}
					key="status"
					field="status"
					header="Status"
				/>
			</DataGridScope>
		</>
	)
}
