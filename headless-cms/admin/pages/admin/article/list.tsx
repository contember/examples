import * as React from 'react'
import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Articles
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/article/create">
					Create new article
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Article" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/article/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<TextCell key="slug" field="slug" header="Slug" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
