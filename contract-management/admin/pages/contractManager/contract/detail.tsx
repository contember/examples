import * as React from 'react'
import { BooleanCell, Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Contract detail
			</Title>
			<DetailScope entity="Contract(id=$id)">
				<SlotSources.Back>
					<LinkButton to="contractManager/contract/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Contracts
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="contractManager/contract/edit(id: $entity.id)">
						Edit contract
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
								<DisplayTextField field="client.name" label="User" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="totalValue" label="Total value" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Milestones
								</h2>
								<LinkButton to="contractManager/milestone/create">
									Create new milestone
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Milestone[contract.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="contractManager/milestone/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="dueDate" field="dueDate" header="Due date" />
							<BooleanCell key="completed" field="completed" header="Completed" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Documents
								</h2>
								<LinkButton to="contractManager/document/create">
									Create new document
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Document[contract.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="contractManager/document/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Payments
								</h2>
								<LinkButton to="contractManager/payment/create">
									Create new payment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Payment[contract.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="contractManager/payment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="client" header="client" options="User.name" />
							<HasOneSelectCell field="milestone" header="milestone" options="Milestone.title" />
							<NumberCell key="amount" field="amount" header="Amount" />
							<DateCell key="date" field="date" header="Date" />
							<TextCell key="paymentMethod" field="paymentMethod" header="Payment method" />
							<EnumCell
								options={{ pending: 'pending', paid: 'paid', overdue: 'overdue' }}
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
