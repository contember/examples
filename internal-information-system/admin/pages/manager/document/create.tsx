import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { DocumentForm } from '../../../components/forms/DocumentForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create document
			</Title>
			<CreateScope entity="Document" redirectOnSuccess="manager/document/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create document" labelSaved="Create document" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="manager/document/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Documents
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<DocumentForm />
				</>
			</CreateScope>
		</>
	)
}
