import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Articles
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Article" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="public/article/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<TextCell key="slug" field="slug" header="Slug" />
			</DataGridScope>
		</>
	)
}
