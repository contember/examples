import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { RoomForm } from '../../../components/forms/RoomForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create room
			</Title>
			<CreateScope entity="Room" redirectOnSuccess="receptionist/room/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create room" labelSaved="Create room" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="receptionist/room/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Rooms
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<RoomForm />
				</>
			</CreateScope>
		</>
	)
}
