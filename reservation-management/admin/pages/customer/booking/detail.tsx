import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Booking detail
			</Title>
			<DetailScope entity="Booking(id=$id)">
				<SlotSources.Back>
					<LinkButton to="customer/booking/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Bookings
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="customer/booking/edit(id: $entity.id)">
						Edit booking
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="customer.name" label="Customer" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="checkInDate" label="Check in date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="checkOutDate" label="Check out date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="totalPrice" label="Total price" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="status" label="Status" labelPosition="labelLeft" />
							</div>
						</Stack>
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
						<DataGrid entities="Payment[booking.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="customer/payment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="customer" header="customer" options="Customer.name" />
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
