import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Lead detail
			</Title>
			<DetailScope entity="Lead(id=$id)">
				<SlotSources.Back>
					<LinkButton to="salesManager/lead/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Leads
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="salesManager/lead/edit(id: $entity.id)">
						Edit lead
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="contactInfo" label="Contact info" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="source" label="Source" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="assignedTo.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Deals
								</h2>
								<LinkButton to="salesManager/deal/create">
									Create new deal
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Deal[lead.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesManager/deal/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<NumberCell key="value" field="value" header="Value" />
							<EnumCell options={{ open: 'open', won: 'won', lost: 'lost' }} key="status" field="status" header="Status" />
							<DateCell key="expectedCloseDate" field="expectedCloseDate" header="Expected close date" />
						</DataGrid>
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
						<DataGrid entities="Task[lead.id=$id]">
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
