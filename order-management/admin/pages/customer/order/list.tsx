import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
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
					<LinkButton to="customer/order/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<DateCell key="orderDate" field="orderDate" header="Order date" />
				<HasOneSelectCell field="customer" header="customer" options="User.name" />
			</DataGridScope>
		</>
	)
}
