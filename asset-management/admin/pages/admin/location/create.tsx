import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { LocationForm } from '../../../components/forms/LocationForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create location
			</Title>
			<CreateScope entity="Location" redirectOnSuccess="admin/location/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create location" labelSaved="Create location" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/location/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Locations
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<LocationForm />
				</>
			</CreateScope>
		</>
	)
}
