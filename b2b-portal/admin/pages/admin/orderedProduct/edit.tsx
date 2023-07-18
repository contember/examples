import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { OrderedProductForm } from '../../../components/forms/OrderedProductForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit ordered product
			</Title>
			<EditScope entity="OrderedProduct(id=$id)" redirectOnSuccess="admin/orderedProduct/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="admin/orderedProduct/detail(id: $entity.id)"
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
				<OrderedProductForm />
			</EditScope>
		</>
	)
}
