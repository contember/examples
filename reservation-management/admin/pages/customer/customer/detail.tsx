import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Customer detail
			</Title>
			<DetailScope entity="Customer(id=$id)">
				<SlotSources.Back>
					<LinkButton to="customer/customer/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Customers
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="customer/customer/edit(id: $entity.id)">
						Edit customer
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
							<div className="box-item">
								<DisplayTextField field="address" label="Address" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Bookings
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Booking[customer.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="customer/booking/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<DateCell key="checkInDate" field="checkInDate" header="Check in date" />
							<DateCell key="checkOutDate" field="checkOutDate" header="Check out date" />
							<NumberCell key="totalPrice" field="totalPrice" header="Total price" />
							<EnumCell
								options={{ pending: 'pending', confirmed: 'confirmed', canceled: 'canceled' }}
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
									Payments
								</h2>
								<LinkButton to="customer/payment/create">
									Create new payment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Payment[customer.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="customer/payment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="booking" header="booking" options="Booking.id" />
							<NumberCell key="amount" field="amount" header="Amount" />
							<DateCell key="date" field="date" header="Date" />
							<TextCell key="paymentMethod" field="paymentMethod" header="Payment method" />
							<EnumCell
								options={{ pending: 'pending', paid: 'paid', refunded: 'refunded' }}
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
