import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Ordered products
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="OrderedProduct" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="supplier/orderedProduct/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="product" header="product" options="Product.name" />
				<HasOneSelectCell field="order" header="order" options="Order.id" />
				<NumberCell key="quantity" field="quantity" header="Quantity" />
			</DataGridScope>
		</>
	)
}
