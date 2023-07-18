import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentImageForm } from '../../../components/forms/ContentImageForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create content image
			</Title>
			<CreateScope entity="ContentImage" redirectOnSuccess="admin/contentImage/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create content image" labelSaved="Create content image" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/contentImage/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Content images
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ContentImageForm />
				</>
			</CreateScope>
		</>
	)
}
