import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { AuditForm } from '../../../components/forms/AuditForm'
import { SlotSources, Title } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Title>
				Create audit
			</Title>
			<CreateScope entity="Audit" redirectOnSuccess="complianceOfficer/audit/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create audit" labelSaved="Create audit" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="complianceOfficer/audit/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Audits
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<AuditForm />
				</>
			</CreateScope>
		</>
	)
}
