import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
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
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Leads
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Lead[salesRepresentative.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/lead/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<TextCell key="email" field="email" header="Email" />
							<TextCell key="phone" field="phone" header="Phone" />
							<TextCell key="source" field="source" header="Source" />
							<EnumCell
								options={{ new: 'new', contacted: 'contacted', qualified: 'qualified' }}
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
									Customers
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Customer[salesRepresentative.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/customer/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<TextCell key="email" field="email" header="Email" />
							<TextCell key="phone" field="phone" header="Phone" />
							<TextCell key="company" field="company" header="Company" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Deals
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Deal[salesRepresentative.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/deal/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<NumberCell key="value" field="value" header="Value" />
							<HasOneSelectCell field="customer" header="customer" options="Customer.name" />
							<EnumCell options={{ open: 'open', won: 'won', lost: 'lost' }} key="status" field="status" header="Status" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Communication logs
								</h2>
							</Stack>
						</div>
						<DataGrid entities="CommunicationLog[salesRepresentative.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/communicationLog/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<EnumCell
								options={{ call: 'call', email: 'email', meeting: 'meeting' }}
								key="type"
								field="type"
								header="Type"
							/>
							<DateCell key="date" field="date" header="Date" />
							<TextCell key="time" field="time" header="Time" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Tasks
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Task[salesRepresentative.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/task/detail(id: $entity.id)">
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
				</Stack>
			</DetailScope>
		</>
	)
}
