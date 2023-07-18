import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Assets
			</Title>
			<SlotSources.Actions>
				<LinkButton to="assetManager/asset/create">
					Create new asset
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Asset" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="assetManager/asset/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<HasOneSelectCell field="category" header="category" options="Category.name" />
				<HasOneSelectCell field="location" header="location" options="Location.name" />
				<DateCell key="purchaseDate" field="purchaseDate" header="Purchase date" />
				<NumberCell key="value" field="value" header="Value" />
			</DataGridScope>
		</>
	)
}
