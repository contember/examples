import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Room detail
			</Title>
			<DetailScope entity="Room(id=$id)">
				<SlotSources.Back>
					<LinkButton to="receptionist/room/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Rooms
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="receptionist/room/edit(id: $entity.id)">
						Edit room
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="type" label="Type" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="capacity" label="Capacity" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="pricePerNight" label="Price per night" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Bookings
								</h2>
								<LinkButton to="receptionist/booking/create">
									Create new booking
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Booking[room.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="receptionist/booking/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="customer" header="customer" options="Customer.name" />
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
				</Stack>
			</DetailScope>
		</>
	)
}
