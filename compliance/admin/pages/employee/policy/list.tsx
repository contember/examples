import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Policies
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Policy" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="employee/policy/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="effectiveDate" field="effectiveDate" header="Effective date" />
				<DateCell key="reviewDate" field="reviewDate" header="Review date" />
			</DataGridScope>
		</>
	)
}
