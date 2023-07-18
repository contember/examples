import * as React from 'react'
import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
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
								<DisplayTextField field="phone" label="Phone" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="company" label="Company" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="address" label="Address" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="roles" label="Role" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Contracts
								</h2>
								<LinkButton to="admin/contract/create">
									Create new contract
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Contract[client.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/contract/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="startDate" field="startDate" header="Start date" />
							<DateCell key="endDate" field="endDate" header="End date" />
							<NumberCell key="totalValue" field="totalValue" header="Total value" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Payments
								</h2>
								<LinkButton to="admin/payment/create">
									Create new payment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Payment[client.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/payment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="contract" header="contract" options="Contract.title" />
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
