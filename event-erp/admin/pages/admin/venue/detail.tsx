import * as React from 'react'
import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Venue detail
			</Title>
			<DetailScope entity="Venue(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/venue/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Venues
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/venue/edit(id: $entity.id)">
						Edit venue
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="address" label="Address" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="capacity" label="Capacity" labelPosition="labelLeft" />
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
						<DataGrid entities="Event[venue.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/event/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell key="name" field="name" header="Name" />
							<DateCell key="startDate" field="startDate" header="Start date" />
							<DateCell key="endDate" field="endDate" header="End date" />
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
