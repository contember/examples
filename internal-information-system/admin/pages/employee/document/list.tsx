import * as React from 'react'
import { DataGridScope, EnumCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Documents
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Document" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="employee/document/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
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
