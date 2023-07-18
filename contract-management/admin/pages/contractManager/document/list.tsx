import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Documents
			</Title>
			<SlotSources.Actions>
				<LinkButton to="contractManager/document/create">
					Create new document
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Document" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="contractManager/document/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<HasOneSelectCell field="contract" header="contract" options="Contract.title" />
			</DataGridScope>
		</>
	)
}
