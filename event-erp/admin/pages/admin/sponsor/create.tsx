import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { SponsorForm } from '../../../components/forms/SponsorForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create sponsor
			</Title>
			<CreateScope entity="Sponsor" redirectOnSuccess="admin/sponsor/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create sponsor" labelSaved="Create sponsor" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/sponsor/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Sponsors
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<SponsorForm />
				</>
			</CreateScope>
		</>
	)
}
