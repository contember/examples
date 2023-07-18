import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Content images
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/contentImage/create">
					Create new content image
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="ContentImage" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/contentImage/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
