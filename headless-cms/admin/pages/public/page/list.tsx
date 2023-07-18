import * as React from 'react'
import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Pages
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Page" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="public/page/edit(id: $entity.id)">
						Edit
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<TextCell key="slug" field="slug" header="Slug" />
			</DataGridScope>
		</>
	)
}
