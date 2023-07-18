import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentFeatureItemForm } from '../../../components/forms/ContentFeatureItemForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create content feature item
			</Title>
			<CreateScope entity="ContentFeatureItem" redirectOnSuccess="admin/contentFeatureItem/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create content feature item" labelSaved="Create content feature item" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/contentFeatureItem/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Content feature items
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ContentFeatureItemForm />
				</>
			</CreateScope>
		</>
	)
}
