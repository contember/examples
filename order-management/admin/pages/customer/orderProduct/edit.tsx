import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { OrderProductForm } from '../../../components/forms/OrderProductForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit order product
			</Title>
			<EditScope entity="OrderProduct(id=$id)" redirectOnSuccess="customer/orderProduct/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="customer/orderProduct/detail(id: $entity.id)"
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
				<OrderProductForm />
			</EditScope>
		</>
	)
}
