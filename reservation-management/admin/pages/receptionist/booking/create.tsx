import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { BookingForm } from '../../../components/forms/BookingForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create booking
			</Title>
			<CreateScope entity="Booking" redirectOnSuccess="receptionist/booking/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create booking" labelSaved="Create booking" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="receptionist/booking/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Bookings
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<BookingForm />
				</>
			</CreateScope>
		</>
	)
}
