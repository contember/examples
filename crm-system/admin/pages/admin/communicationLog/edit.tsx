import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CommunicationLogForm } from '../../../components/forms/CommunicationLogForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit communication log
			</Title>
			<EditScope
				entity="CommunicationLog(id=$id)"
				redirectOnSuccess="admin/communicationLog/detail(id: $entity.id)"
			>
				<SlotSources.Back>
					<LinkButton
						to="admin/communicationLog/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CommunicationLogForm />
			</EditScope>
		</>
	)
}
