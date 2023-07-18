import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Shipping detail
			</Title>
			<DetailScope entity="Shipping(id=$id)">
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/shipping/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Shippings
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="salesRepresentative/shipping/edit(id: $entity.id)">
						Edit shipping
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="trackingNumber" label="Tracking number" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="carrier" label="Carrier" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="shippingDate" label="Shipping date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="estimatedDeliveryDate" label="Estimated delivery date" labelPosition="labelLeft" />
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
