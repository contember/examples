import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, Stack, TextCell } from '@contember/admin'
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
					<LinkButton to="manager/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
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
								<DisplayTextField field="jobTitle" label="Job title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="department.name" label="Department" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Tasks
								</h2>
								<LinkButton to="manager/task/create">
									Create new task
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Task[assignedEmployee.id=$id]">
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
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Projects
								</h2>
								<LinkButton to="manager/project/create">
									Create new project
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Project[employees.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="manager/project/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="startDate" field="startDate" header="Start date" />
							<DateCell key="endDate" field="endDate" header="End date" />
							<HasOneSelectCell field="department" header="department" options="Department.name" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Departments
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Department[manager.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="manager/department/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
