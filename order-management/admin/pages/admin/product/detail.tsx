import * as React from 'react'
import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, FieldContainer, GenericCell, HasOneSelectCell, ImageFieldView, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { getImageResizeUrl } from '../../../scripts/getImageResizeUrl'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Product detail
			</Title>
			<DetailScope entity="Product(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/product/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Products
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/product/edit(id: $entity.id)">
						Edit product
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="price" label="Price" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="availableQuantity" label="Available quantity" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<FieldContainer label="Image" labelPosition="labelLeft">
									<ImageFieldView
										srcField="image.url"
										formatUrl={srcFieldValue => getImageResizeUrl(srcFieldValue, { width: 100 })}
										width={100}
									/>
								</FieldContainer>
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Order products
								</h2>
							</Stack>
						</div>
						<DataGrid entities="OrderProduct[product.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/orderProduct/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<NumberCell key="quantity" field="quantity" header="Quantity" />
							<HasOneSelectCell field="order" header="order" options="Order.id" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
