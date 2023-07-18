import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Project detail
			</Title>
			<DetailScope entity="Project(id=$id)">
				<SlotSources.Back>
					<LinkButton to="manager/project/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Projects
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="manager/project/edit(id: $entity.id)">
						Edit project
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="startDate" label="Start date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="endDate" label="End date" labelPosition="labelLeft" />
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
						<DataGrid entities="Task[project.id=$id]">
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
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Documents
								</h2>
								<LinkButton to="manager/document/create">
									Create new document
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Document[project.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="manager/document/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<EnumCell
								options={{ public: 'public', departmentOnly: 'departmentOnly', projectOnly: 'projectOnly' }}
								key="accessLevel"
								field="accessLevel"
								header="Access level"
							/>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
