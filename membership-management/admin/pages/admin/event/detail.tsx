import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Event detail
			</Title>
			<DetailScope entity="Event(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/event/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Events
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/event/edit(id: $entity.id)">
						Edit event
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
								<DisplayTextField field="date" label="Date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="time" label="Time" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="location" label="Location" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="registrationFee" label="Registration fee" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
