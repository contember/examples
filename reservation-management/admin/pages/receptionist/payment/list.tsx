import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Payments
			</Title>
			<SlotSources.Actions>
				<LinkButton to="receptionist/payment/create">
					Create new payment
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Payment" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="receptionist/payment/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="customer" header="customer" options="Customer.name" />
				<HasOneSelectCell field="booking" header="booking" options="Booking.id" />
				<NumberCell key="amount" field="amount" header="Amount" />
				<DateCell key="date" field="date" header="Date" />
				<TextCell key="paymentMethod" field="paymentMethod" header="Payment method" />
				<EnumCell
					options={{ pending: 'pending', paid: 'paid', refunded: 'refunded' }}
					key="status"
					field="status"
					header="Status"
				/>
			</DataGridScope>
		</>
	)
}
