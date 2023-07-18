import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
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
					<LinkButton to="salesRepresentative/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="salesRepresentative/user/edit(id: $entity.id)">
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
								<DisplayTextField field="phoneNumber" label="Phone number" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Leads
								</h2>
								<LinkButton to="salesRepresentative/lead/create">
									Create new lead
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Lead[assignedTo.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/lead/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<TextCell key="source" field="source" header="Source" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Tasks
								</h2>
								<LinkButton to="salesRepresentative/task/create">
									Create new task
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Task[assignedTo.id=$id]">
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
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
