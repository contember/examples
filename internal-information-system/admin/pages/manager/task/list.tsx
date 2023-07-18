import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Tasks
			</Title>
			<SlotSources.Actions>
				<LinkButton to="manager/task/create">
					Create new task
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Task" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="manager/task/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="dueDate" field="dueDate" header="Due date" />
				<EnumCell
					options={{ low: 'low', medium: 'medium', high: 'high' }}
					key="priority"
					field="priority"
					header="Priority"
				/>
				<EnumCell
					options={{ pending: 'pending', completed: 'completed' }}
					key="status"
					field="status"
					header="Status"
				/>
				<HasOneSelectCell field="assignedEmployee" header="assignedEmployee" options="User.name" />
			</DataGridScope>
		</>
	)
}
