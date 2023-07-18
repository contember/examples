import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Order products
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/orderProduct/create">
					Create new order product
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="OrderProduct" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/orderProduct/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<NumberCell key="quantity" field="quantity" header="Quantity" />
				<HasOneSelectCell field="order" header="order" options="Order.id" />
				<HasOneSelectCell field="product" header="product" options="Product.name" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
