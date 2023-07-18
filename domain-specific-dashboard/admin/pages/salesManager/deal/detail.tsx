import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Deal detail
			</Title>
			<DetailScope entity="Deal(id=$id)">
				<SlotSources.Back>
					<LinkButton to="salesManager/deal/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Deals
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="salesManager/deal/edit(id: $entity.id)">
						Edit deal
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="value" label="Value" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="status" label="Status" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="expectedCloseDate" label="Expected close date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="lead.name" label="Lead" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Tasks
								</h2>
								<LinkButton to="salesManager/task/create">
									Create new task
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Task[deal.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesManager/task/detail(id: $entity.id)">
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
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
