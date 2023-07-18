import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Procedures
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Procedure" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="employee/procedure/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<HasOneSelectCell field="policy" header="policy" options="Policy.title" />
			</DataGridScope>
		</>
	)
}
