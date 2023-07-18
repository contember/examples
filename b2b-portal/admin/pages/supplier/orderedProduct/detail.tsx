import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Ordered product detail
			</Title>
			<DetailScope entity="OrderedProduct(id=$id)">
				<SlotSources.Back>
					<LinkButton to="supplier/orderedProduct/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Ordered products
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="supplier/orderedProduct/edit(id: $entity.id)">
						Edit ordered product
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="product.name" label="Product" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="quantity" label="Quantity" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
