import * as React from 'react'
import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, EnumCell, GenericCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				User detail
			</Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/user/edit(id: $entity.id)">
						Edit user
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
								<DisplayTextField field="address" label="Address" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="membershipPlan.name" label="Membership plan" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Events
								</h2>
								<LinkButton to="admin/event/create">
									Create new event
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Event[attendingMembers.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/event/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="date" field="date" header="Date" />
							<DateCell key="time" field="time" header="Time" />
							<TextCell key="location" field="location" header="Location" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Payments
								</h2>
								<LinkButton to="admin/payment/create">
									Create new payment
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Payment[member.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/payment/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<NumberCell key="amount" field="amount" header="Amount" />
							<DateCell key="date" field="date" header="Date" />
							<EnumCell
								options={{ creditCard: 'creditCard', bankTransfer: 'bankTransfer', cash: 'cash' }}
								key="paymentMethod"
								field="paymentMethod"
								header="Payment method"
							/>
							<EnumCell
								options={{ membershipFee: 'membershipFee', eventRegistration: 'eventRegistration' }}
								key="purpose"
								field="purpose"
								header="Purpose"
							/>
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Communication logs
								</h2>
								<LinkButton to="admin/communicationLog/create">
									Create new communication log
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="CommunicationLog[member.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/communicationLog/detail(id: $entity.id)">
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
							<DateCell key="time" field="time" header="Time" />
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
