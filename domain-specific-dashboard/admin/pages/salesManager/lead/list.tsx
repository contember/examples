import * as React from 'react'
import { DataGridScope, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources, Title } from '../../../components/Slots'

export default () => {
	return (
		<>
			<Title>
				Leads
			</Title>
			<SlotSources.Actions>
				<LinkButton to="salesManager/lead/create">
					Create new lead
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Lead" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="salesManager/lead/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell key="name" field="name" header="Name" />
				<TextCell key="source" field="source" header="Source" />
				<HasOneSelectCell field="assignedTo" header="assignedTo" options="User.name" />
			</DataGridScope>
		</>
	)
}
