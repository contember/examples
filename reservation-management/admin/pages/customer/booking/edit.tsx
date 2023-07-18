import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { BookingForm } from '../../../components/forms/BookingForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit booking
			</Title>
			<EditScope entity="Booking(id=$id)" redirectOnSuccess="customer/booking/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="customer/booking/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<BookingForm />
			</EditScope>
		</>
	)
}
