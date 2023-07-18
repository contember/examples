import * as React from 'react'
import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
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
								<DisplayTextField field="address" label="Address" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Orders
								</h2>
								<LinkButton to="admin/order/create">
									Create new order
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Order[customer.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/order/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<DateCell key="orderDate" field="orderDate" header="Order date" />
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
							</Stack>
						</div>
						<DataGrid entities="Payment[customer.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/payment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="order" header="order" options="Order.id" />
							<NumberCell key="amount" field="amount" header="Amount" />
							<DateCell key="date" field="date" header="Date" />
							<EnumCell
								options={{ creditCard: 'creditCard', bankTransfer: 'bankTransfer', cash: 'cash' }}
								key="method"
								field="method"
								header="Method"
							/>
							<EnumCell
								options={{ pending: 'pending', paid: 'paid', refunded: 'refunded' }}
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
