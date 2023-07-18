import * as React from 'react'
import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				User detail
			</Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/user/edit(id: $entity.id)">
						Edit user
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="role" label="Role" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Maintenance tasks
								</h2>
								<LinkButton to="admin/maintenanceTask/create">
									Create new maintenance task
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="MaintenanceTask[assignedTechnician.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/maintenanceTask/detail(id: $entity.id)">
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
							<HasOneSelectCell field="asset" header="asset" options="Asset.name" />
							<EnumCell
								options={{ pending: 'pending', completed: 'completed' }}
								key="status"
								field="status"
								header="Status"
							/>
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
