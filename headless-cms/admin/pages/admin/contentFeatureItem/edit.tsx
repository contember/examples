import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ContentFeatureItemForm } from '../../../components/forms/ContentFeatureItemForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit content feature item
			</Title>
			<EditScope entity="ContentFeatureItem(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/contentFeatureItem/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							List
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ContentFeatureItemForm />
			</EditScope>
		</>
	)
}
