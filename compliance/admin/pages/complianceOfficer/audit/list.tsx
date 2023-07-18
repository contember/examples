import * as React from 'react'
import { DataGridScope, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Audits
			</Title>
			<SlotSources.Actions>
				<LinkButton to="complianceOfficer/audit/create">
					Create new audit
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Audit" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="complianceOfficer/audit/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="date" field="date" header="Date" />
			</DataGridScope>
		</>
	)
}
