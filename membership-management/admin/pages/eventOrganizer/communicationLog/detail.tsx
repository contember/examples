import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Communication log detail
			</Title>
			<DetailScope entity="CommunicationLog(id=$id)">
				<SlotSources.Back>
					<LinkButton to="eventOrganizer/communicationLog/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Communication logs
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="eventOrganizer/communicationLog/edit(id: $entity.id)">
						Edit communication log
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="type" label="Type" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="date" label="Date" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="time" label="Time" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="member.name" label="User" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="notes" label="Note" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
