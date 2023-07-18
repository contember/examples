import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PaymentForm } from '../../../components/forms/PaymentForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create payment
			</Title>
			<CreateScope entity="Payment" redirectOnSuccess="salesRepresentative/payment/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create payment" labelSaved="Create payment" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/payment/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Payments
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PaymentForm />
				</>
			</CreateScope>
		</>
	)
}
