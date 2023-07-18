import * as React from 'react'
import { BooleanCell, DataGridScope, DateCell, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Incidents
			</Title>
			<SlotSources.Actions>
				<LinkButton to="admin/incident/create">
					Create new incident
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Incident" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/incident/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="title" field="title" header="Title" />
				<DateCell key="date" field="date" header="Date" />
				<HasOneSelectCell field="involvedEmployee" header="involvedEmployee" options="User.name" />
				<TextCell
					key="relatedPolicyOrProcedure"
					field="relatedPolicyOrProcedure"
					header="Related policy or procedure"
				/>
				<BooleanCell key="resolutionStatus" field="resolutionStatus" header="Resolution status" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
