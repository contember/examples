import * as React from 'react'
import { DataGridScope, DateCell, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Maintenance tasks
			</Title>
			<SlotSources.Actions>
				<LinkButton to="assetManager/maintenanceTask/create">
					Create new maintenance task
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="MaintenanceTask" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="assetManager/maintenanceTask/detail(id: $entity.id)">
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
				<HasOneSelectCell field="assignedTechnician" header="assignedTechnician" options="User.name" />
				<HasOneSelectCell field="asset" header="asset" options="Asset.name" />
				<EnumCell
					options={{ pending: 'pending', completed: 'completed' }}
					key="status"
					field="status"
					header="Status"
				/>
			</DataGridScope>
		</>
	)
}
