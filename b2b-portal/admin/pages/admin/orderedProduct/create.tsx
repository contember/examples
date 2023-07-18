import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { OrderedProductForm } from '../../../components/forms/OrderedProductForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create ordered product
			</Title>
			<CreateScope entity="OrderedProduct" redirectOnSuccess="admin/orderedProduct/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create ordered product" labelSaved="Create ordered product" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/orderedProduct/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Ordered products
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<OrderedProductForm />
				</>
			</CreateScope>
		</>
	)
}
