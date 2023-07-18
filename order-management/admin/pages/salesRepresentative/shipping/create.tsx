import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ShippingForm } from '../../../components/forms/ShippingForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create shipping
			</Title>
			<CreateScope entity="Shipping" redirectOnSuccess="salesRepresentative/shipping/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create shipping" labelSaved="Create shipping" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/shipping/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Shippings
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ShippingForm />
				</>
			</CreateScope>
		</>
	)
}
