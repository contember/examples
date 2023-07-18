import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Categories
			</Title>
			<SlotSources.Actions>
				<LinkButton to="assetManager/category/create">
					Create new category
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Category" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="assetManager/category/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
			</DataGridScope>
		</>
	)
}
