import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentBlockForm } from '../../../components/forms/ContentBlockForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit content block
			</Title>
			<EditScope entity="ContentBlock(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/contentBlock/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ContentBlockForm />
			</EditScope>
		</>
	)
}
