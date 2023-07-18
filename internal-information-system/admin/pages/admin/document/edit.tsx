import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DocumentForm } from '../../../components/forms/DocumentForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit document
			</Title>
			<EditScope entity="Document(id=$id)" redirectOnSuccess="admin/document/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/document/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<DocumentForm />
			</EditScope>
		</>
	)
}
