import * as React from 'react'
import { Box, DataGrid, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Order detail
			</Title>
			<DetailScope entity="Order(id=$id)">
				<SlotSources.Back>
					<LinkButton to="supplier/order/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Orders
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="supplier/order/edit(id: $entity.id)">
						Edit order
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="client.name" label="User" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="orderDate" label="Order date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="shippingDate" label="Shipping date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="status" label="Status" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Ordered products
								</h2>
							</Stack>
						</div>
						<DataGrid entities="OrderedProduct[order.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="supplier/orderedProduct/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="product" header="product" options="Product.name" />
							<NumberCell key="quantity" field="quantity" header="Quantity" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
