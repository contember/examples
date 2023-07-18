import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Category detail
			</Title>
			<DetailScope entity="Category(id=$id)">
				<SlotSources.Back>
					<LinkButton to="assetManager/category/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Categories
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="assetManager/category/edit(id: $entity.id)">
						Edit category
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
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Assets
								</h2>
								<LinkButton to="assetManager/asset/create">
									Create new asset
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Asset[category.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="assetManager/asset/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<HasOneSelectCell field="location" header="location" options="Location.name" />
							<DateCell key="purchaseDate" field="purchaseDate" header="Purchase date" />
							<NumberCell key="value" field="value" header="Value" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
