import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Products
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Product" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="supplier/product/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<NumberCell key="price" field="price" header="Price" />
				<NumberCell key="availableQuantity" field="availableQuantity" header="Available quantity" />
				<HasOneSelectCell field="supplier" header="supplier" options="User.name" />
			</DataGridScope>
		</>
	)
}
