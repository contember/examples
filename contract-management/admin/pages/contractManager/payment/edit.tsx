import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PaymentForm } from '../../../components/forms/PaymentForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit payment
			</Title>
			<EditScope entity="Payment(id=$id)" redirectOnSuccess="contractManager/payment/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="contractManager/payment/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<PaymentForm />
			</EditScope>
		</>
	)
}
