import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { OrderForm } from '../../../components/forms/OrderForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create order
			</Title>
			<CreateScope entity="Order" redirectOnSuccess="admin/order/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create order" labelSaved="Create order" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/order/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Orders
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<OrderForm />
				</>
			</CreateScope>
		</>
	)
}
