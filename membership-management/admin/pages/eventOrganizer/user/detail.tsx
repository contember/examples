import * as React from 'react'
import { Box, DataGrid, DateCell, DetailScope, DisplayTextField, EnumCell, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
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
					<LinkButton to="eventOrganizer/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
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
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Events
								</h2>
								<LinkButton to="eventOrganizer/event/create">
									Create new event
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Event[attendingMembers.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="eventOrganizer/event/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="title" field="title" header="Title" />
							<DateCell key="date" field="date" header="Date" />
							<DateCell key="time" field="time" header="Time" />
							<TextCell key="location" field="location" header="Location" />
						</DataGrid>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Communication logs
								</h2>
								<LinkButton to="eventOrganizer/communicationLog/create">
									Create new communication log
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="CommunicationLog[member.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="eventOrganizer/communicationLog/detail(id: $entity.id)">
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
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
