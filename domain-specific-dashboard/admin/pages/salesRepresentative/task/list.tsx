import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Tasks
			</Title>
			<SlotSources.Actions>
				<LinkButton to="salesRepresentative/task/create">
					Create new task
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Task" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="salesRepresentative/task/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<EnumCell
					options={{ call: 'call', meeting: 'meeting', followUp: 'followUp' }}
					key="taskType"
					field="taskType"
					header="Task type"
				/>
				<DateCell key="dueDate" field="dueDate" header="Due date" />
				<EnumCell
					options={{ pending: 'pending', completed: 'completed' }}
					key="status"
					field="status"
					header="Status"
				/>
				<HasOneSelectCell field="assignedTo" header="assignedTo" options="User.name" />
			</DataGridScope>
		</>
	)
}
