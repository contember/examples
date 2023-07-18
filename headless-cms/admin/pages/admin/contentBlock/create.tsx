import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentBlockForm } from '../../../components/forms/ContentBlockForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create content block
			</Title>
			<CreateScope entity="ContentBlock" redirectOnSuccess="admin/contentBlock/edit(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create content block" labelSaved="Create content block" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/contentBlock/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Content blocks
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ContentBlockForm />
				</>
			</CreateScope>
		</>
	)
}
