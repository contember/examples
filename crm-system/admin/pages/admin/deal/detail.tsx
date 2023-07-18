import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Deal detail
			</Title>
			<DetailScope entity="Deal(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/deal/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Deals
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/deal/edit(id: $entity.id)">
						Edit deal
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="value" label="Value" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="customer.name" label="Customer" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="salesRepresentative.name" label="User" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="status" label="Status" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
