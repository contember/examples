import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Orders
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Order" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="supplier/order/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="client" header="client" options="User.name" />
				<DateCell key="orderDate" field="orderDate" header="Order date" />
				<DateCell key="shippingDate" field="shippingDate" header="Shipping date" />
				<TextCell key="status" field="status" header="Status" />
			</DataGridScope>
		</>
	)
}
