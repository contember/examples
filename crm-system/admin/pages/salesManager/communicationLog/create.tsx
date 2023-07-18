import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CommunicationLogForm } from '../../../components/forms/CommunicationLogForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create communication log
			</Title>
			<CreateScope entity="CommunicationLog" redirectOnSuccess="salesManager/communicationLog/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create communication log" labelSaved="Create communication log" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="salesManager/communicationLog/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Communication logs
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CommunicationLogForm />
				</>
			</CreateScope>
		</>
	)
}
