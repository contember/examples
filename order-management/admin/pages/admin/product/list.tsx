import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Products
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/product/create">
					Create new product
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Product" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/product/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<NumberCell key="price" field="price" header="Price" />
				<NumberCell key="availableQuantity" field="availableQuantity" header="Available quantity" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
