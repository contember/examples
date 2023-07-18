import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Customer detail
			</Title>
			<DetailScope entity="Customer(id=$id)">
				<SlotSources.Back>
					<LinkButton to="salesRepresentative/customer/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Customers
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="salesRepresentative/customer/edit(id: $entity.id)">
						Edit customer
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="phone" label="Phone" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="company" label="Company" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="salesRepresentative.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Deals
								</h2>
							</Stack>
						</div>
						<DataGrid entities="Deal[customer.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/deal/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<NumberCell key="value" field="value" header="Value" />
							<HasOneSelectCell field="salesRepresentative" header="salesRepresentative" options="User.name" />
							<EnumCell options={{ open: 'open', won: 'won', lost: 'lost' }} key="status" field="status" header="Status" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Communication logs
								</h2>
							</Stack>
						</div>
						<DataGrid entities="CommunicationLog[customer.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="salesRepresentative/communicationLog/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<EnumCell
								options={{ call: 'call', email: 'email', meeting: 'meeting' }}
								key="type"
								field="type"
								header="Type"
							/>
							<DateCell key="date" field="date" header="Date" />
							<TextCell key="time" field="time" header="Time" />
							<HasOneSelectCell field="salesRepresentative" header="salesRepresentative" options="User.name" />
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
