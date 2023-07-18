import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Departments
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Department" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="manager/department/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<HasOneSelectCell field="manager" header="manager" options="User.name" />
			</DataGridScope>
		</>
	)
}
