import * as React from 'react'
import { DataGridScope, DateCell, DeleteEntityButton, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Payments
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/payment/create">
					Create new payment
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Payment" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/payment/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="customer" header="customer" options="User.name" />
				<HasOneSelectCell field="order" header="order" options="Order.id" />
				<NumberCell key="amount" field="amount" header="Amount" />
				<DateCell key="date" field="date" header="Date" />
				<EnumCell
					options={{ creditCard: 'creditCard', bankTransfer: 'bankTransfer', cash: 'cash' }}
					key="method"
					field="method"
					header="Method"
				/>
				<EnumCell
					options={{ pending: 'pending', paid: 'paid', refunded: 'refunded' }}
					key="status"
					field="status"
					header="Status"
				/>
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
