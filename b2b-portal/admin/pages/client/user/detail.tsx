import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
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
					<LinkButton to="client/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="client/user/edit(id: $entity.id)">
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
							<div className="box-item">
								<DisplayTextField field="company" label="Company" labelPosition="labelLeft" />
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
									Products
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Product[supplier.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="client/product/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<NumberCell key="price" field="price" header="Price" />
							<NumberCell key="availableQuantity" field="availableQuantity" header="Available quantity" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Orders
								</h2>
								<LinkButton to="client/order/create">
									Create new order
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Order[client.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="client/order/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<DateCell key="orderDate" field="orderDate" header="Order date" />
							<DateCell key="shippingDate" field="shippingDate" header="Shipping date" />
							<TextCell key="status" field="status" header="Status" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Invoices
								</h2>
								<LinkButton to="client/invoice/create">
									Create new invoice
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Invoice[client.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="client/invoice/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="order" header="order" options="Order.id" />
							<DateCell key="invoiceDate" field="invoiceDate" header="Invoice date" />
							<DateCell key="dueDate" field="dueDate" header="Due date" />
							<NumberCell key="totalAmount" field="totalAmount" header="Total amount" />
							<TextCell key="paymentStatus" field="paymentStatus" header="Payment status" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
