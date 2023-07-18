import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Order products
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="OrderProduct" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="customer/orderProduct/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<NumberCell key="quantity" field="quantity" header="Quantity" />
				<HasOneSelectCell field="order" header="order" options="Order.id" />
				<HasOneSelectCell field="product" header="product" options="Product.name" />
			</DataGridScope>
		</>
	)
}
