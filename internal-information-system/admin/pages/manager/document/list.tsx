import * as React from 'react'
import { DataGridScope, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Documents
			</Title>
			<SlotSources.Actions>
				<LinkButton to="manager/document/create">
					Create new document
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Document" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="manager/document/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<HasOneSelectCell field="project" header="project" options="Project.title" />
				<EnumCell
					options={{ public: 'public', departmentOnly: 'departmentOnly', projectOnly: 'projectOnly' }}
					key="accessLevel"
					field="accessLevel"
					header="Access level"
				/>
			</DataGridScope>
		</>
	)
}
