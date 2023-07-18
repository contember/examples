import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { SponsorForm } from '../../../components/forms/SponsorForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit sponsor
			</Title>
			<EditScope entity="Sponsor(id=$id)" redirectOnSuccess="admin/sponsor/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/sponsor/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<SponsorForm />
			</EditScope>
		</>
	)
}
