import * as React from 'react'
import { BooleanCell, DataGridScope, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Milestones
			</Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Milestone" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="client/milestone/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="dueDate" field="dueDate" header="Due date" />
				<BooleanCell key="completed" field="completed" header="Completed" />
			</DataGridScope>
		</>
	)
}
