import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { SpeakerForm } from '../../../components/forms/SpeakerForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create speaker
			</Title>
			<CreateScope entity="Speaker" redirectOnSuccess="admin/speaker/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create speaker" labelSaved="Create speaker" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/speaker/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Speakers
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<SpeakerForm />
				</>
			</CreateScope>
		</>
	)
}
