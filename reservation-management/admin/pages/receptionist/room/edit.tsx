import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { RoomForm } from '../../../components/forms/RoomForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit room
			</Title>
			<EditScope entity="Room(id=$id)" redirectOnSuccess="receptionist/room/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="receptionist/room/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<RoomForm />
			</EditScope>
		</>
	)
}