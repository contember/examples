import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ProductForm } from '../../../components/forms/ProductForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create product
			</Title>
			<CreateScope entity="Product" redirectOnSuccess="salesRepresentative/product/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create product" labelSaved="Create product" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/product/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Products
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ProductForm />
				</>
			</CreateScope>
		</>
	)
}
