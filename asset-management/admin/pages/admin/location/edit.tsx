import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { LocationForm } from '../../../components/forms/LocationForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit location
			</Title>
			<EditScope entity="Location(id=$id)" redirectOnSuccess="admin/location/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/location/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<LocationForm />
			</EditScope>
		</>
	)
}