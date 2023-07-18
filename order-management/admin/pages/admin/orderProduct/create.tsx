import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { OrderProductForm } from '../../../components/forms/OrderProductForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create order product
			</Title>
			<CreateScope entity="OrderProduct" redirectOnSuccess="admin/orderProduct/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create order product" labelSaved="Create order product" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/orderProduct/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Order products
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<OrderProductForm />
				</>
			</CreateScope>
		</>
	)
}
