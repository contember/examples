import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Invoice detail
			</Title>
			<DetailScope entity="Invoice(id=$id)">
				<SlotSources.Back>
					<LinkButton to="supplier/invoice/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Invoices
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="client.name" label="User" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="invoiceDate" label="Invoice date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="dueDate" label="Due date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="totalAmount" label="Total amount" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="paymentStatus" label="Payment status" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
