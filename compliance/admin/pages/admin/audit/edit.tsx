import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { AuditForm } from '../../../components/forms/AuditForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Edit audit
			</Title>
			<EditScope entity="Audit(id=$id)" redirectOnSuccess="admin/audit/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/audit/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<AuditForm />
			</EditScope>
		</>
	)
}
