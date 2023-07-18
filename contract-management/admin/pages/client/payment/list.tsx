import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Payments
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Payment" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="client/payment/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="client" header="client" options="User.name" />
				<HasOneSelectCell field="milestone" header="milestone" options="Milestone.title" />
				<NumberCell key="amount" field="amount" header="Amount" />
				<DateCell key="date" field="date" header="Date" />
				<TextCell key="paymentMethod" field="paymentMethod" header="Payment method" />
				<EnumCell
					options={{ pending: 'pending', paid: 'paid', overdue: 'overdue' }}
					key="status"
					field="status"
					header="Status"
				/>
			</DataGridScope>
		</>
	)
}
